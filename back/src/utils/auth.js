import config from '../config';
import { User } from '../resources/user/user.model';
import jwt from 'jsonwebtoken';

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'signup requires email and password' });
  }

  try {
    const user = await User.create({ email, password });
    const token = newToken(user);
    return res.status(201).json({ data: { token } });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'signin requires email and password' });
  }

  try {
    const user = await User.findOne({ email })
      .select('email password')
      .exec();

    if (!user) {
      return res.status(401).send({ message: 'user does not exist' });
    }

    const match = await user.checkPassword(password);

    if (!match) {
      return res.status(401).send({ message: 'incorrect password' });
    }

    const token = newToken(user);
    return res
      .status(201)
      .json({ _id: user._doc._id, email: user._doc.email, token });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'no auth in headers' });
  }
  let token = req.headers.authorization.split('Bearer ')[1];

  if (!token) {
    return res.status(401).send({ message: 'no token in auth header' });
  }
  try {
    const payload = await verifyToken(token);
    const user = await User.findOne({ _id: payload.id })
      .select('-password')
      .lean()
      .exec();
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).send({ message: 'not auth' });
  }
};
