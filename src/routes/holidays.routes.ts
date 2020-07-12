import { Router } from 'express';

const holidaysRouter = Router();

holidaysRouter.put('/:codigoIbge/:date', (request, response) => {
  return response.json({ codigoibge: request.params.codigoIbge, data: request.params.date });
})

export default holidaysRouter;
