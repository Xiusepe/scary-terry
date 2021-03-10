import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';

import config from './config';

import favCharacterRouter from './resources/fav-character/favCharacter.router';
import { signup, signin, protect } from './utils/auth';

export const app = express();

app.disable('x-powered-by');

// basic middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// routing
app.post('/signup', signup);
app.post('/signin', signin);

app.use('/api', protect);
app.use('/api/fav', favCharacterRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
