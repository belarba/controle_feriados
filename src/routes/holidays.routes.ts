import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import HolidaysRepository from '../repositories/HolidaysRepository';
import CreateUpdateService from '../services/CreateUpdateHolidayService';
import RemoveService from '../services/RemoveHolidayService';

const holidaysRouter = Router();

holidaysRouter.put('/:ibgeCode/:date', async (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  const name = request.body;

  try {
    const createUpdateHoliday = new CreateUpdateService();

    const returnStatus = await createUpdateHoliday.execute({ ibgeCode, holidayDate, dateType: 'F', name });

    return response.status(returnStatus).json({});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

holidaysRouter.get('/:ibgeCode/:date', async (request, response) => {
  const holidaysRepository = getCustomRepository(HolidaysRepository);
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;

  const findHolidayInSameDateAndPlace = await holidaysRepository.findOne({
    ibgeCode: ibgeCode, date: holidayDate
  });

  if (findHolidayInSameDateAndPlace) {
    return response.status(200).json({ name: findHolidayInSameDateAndPlace.name });
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
