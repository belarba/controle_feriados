import { Router } from 'express';
import holidaysRouter from './holidays.routes';

const routes = Router();

routes.use('/feriados', holidaysRouter)


export default routes;
