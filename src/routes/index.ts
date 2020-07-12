import { Router } from 'express';

const routes = Router();

routes.get('/feriados/:local/:name', (request, response) => {
  return response.json({ localidade: request.params.local, nome: request.params.name });
});

export default routes;
