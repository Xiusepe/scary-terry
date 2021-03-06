export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({ createdBy: req.user._id, _id: req.params.id })
      .lean()
      .exec();

    if (!doc) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const docs = await model.find();

    if (!docs) {
      return res.status(404).end('Document not found');
    }

    return res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export const createOne = model => async (req, res) => {
  console.log('tato', req.body, req.user);
  try {
    await model.create({ ...req.body, createdBy: req.user._id });
    const docs = await model
      .find()
      .lean()
      .exec();
    return res.status(201).json({ data: docs });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const updateOne = model => async (req, res) => {
  try {
    const doc = await model.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id
      },
      req.body,
      { new: true }
    );

    if (!doc) {
      return res.status(404).end();
    }

    return res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const doc = await model.findOneAndRemove(
      {
        _id: req.params.id,
        createdBy: req.user._id
      },
      req.body,
      { new: true }
    );

    if (!doc) {
      return res.status(404).end();
    }

    return res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
