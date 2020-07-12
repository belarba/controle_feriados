import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'blablabla' });
});

export default routes;
