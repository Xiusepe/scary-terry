import { Router } from 'express';
import favCharacterControlers from './favCharacter.controllers';

const router = Router();

router
  .route('/')
  .get(favCharacterControlers.getMany)
  .post(favCharacterControlers.createOne);

router
  .route('/:id')
  .get(favCharacterControlers.getOne)
  .put(favCharacterControlers.updateOne)
  .delete(favCharacterControlers.removeOne);

export default router;
