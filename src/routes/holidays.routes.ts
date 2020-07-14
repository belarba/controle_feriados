import { Router } from 'express';

import CreateUpdateService from '../services/CreateUpdateHolidayService';
import RemoveService from '../services/RemoveHolidayService';
import GetService from '../services/GetHolidayService';

const holidaysRouter = Router();

holidaysRouter.put('/:ibgeCode/:date', async (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  const { name } = request.body;

  try {
    const createUpdateHoliday = new CreateUpdateService();

    const returnStatus = await createUpdateHoliday.execute({ ibgeCode, holidayDate, dateType: 'F', name });

    return response.status(returnStatus).json({});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

holidaysRouter.get('/:ibgeCode/:date', async (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;

  const getHoliday = new GetService();

  const findHolidayInSameDateAndPlace = await getHoliday.execute({ ibgeCode, holidayDate });

  if (findHolidayInSameDateAndPlace) {
    return response.status(200).json({ name: findHolidayInSameDateAndPlace });
  } else {
    return response.status(404).json({ message: 'não encontrado' });
  }
});

holidaysRouter.delete('/:ibgeCode/:date', async (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;

  try {
    const removeHoliday = new RemoveService();

    const returnStatus = await removeHoliday.execute({ ibgeCode, holidayDate, dateType: 'F', name: '' });

    return response.status(returnStatus).json({});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default holidaysRouter;
