import { Router } from 'express';

import HolidaysRepository from '../repositories/HolidaysRepository';
import CreateUpdateService from '../services/CreateUpdateHolidayService';

const holidaysRouter = Router();
const holidaysRepository = new HolidaysRepository();

holidaysRouter.put('/:ibgeCode/:date', (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  const name = request.body;

  try {
    const createUpdateHoliday = new CreateUpdateService(holidaysRepository);

    const returnStatus = createUpdateHoliday.execute({ ibgeCode, holidayDate, dateType: 'F', name });

    return response.status(returnStatus).json({});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

});

holidaysRouter.get('/:ibgeCode/:date', (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  let name = '';

  const findHolidayInSameDateAndPlace = holidaysRepository.findByDateAndPlace(ibgeCode, holidayDate);

  if (findHolidayInSameDateAndPlace) {
    return response.status(200).json({ name: name });
  } else {
    return response.status(404).json({ message: 'não encontrado' });
  }
});

holidaysRouter.delete('/:ibgeCode/:date', (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  let name = '';

  const findHolidayInSameDateAndPlace = holidaysRepository.findByDateAndPlaceAndRemove(ibgeCode, holidayDate);

  if (findHolidayInSameDateAndPlace > 0) {
    return response.status(200).json({ message: 'ok' });
  } else {
    return response.status(404).json({ message: 'não encontrado' });
  }
});

export default holidaysRouter;
