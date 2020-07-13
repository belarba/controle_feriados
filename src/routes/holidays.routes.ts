import { Router } from 'express';

import HolidaysRepository from '../repositories/HolidaysRepository';

const holidaysRouter = Router();
const holidaysRepository = new HolidaysRepository();

holidaysRouter.put('/:ibgeCode/:date', (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  const name = request.body;

  const findHolidayInSameDateAndPlace = holidaysRepository.findByDateAndPlaceAndUpdate(ibgeCode, holidayDate, name);

  if (findHolidayInSameDateAndPlace) {
    return response.status(200).json({ message: 'ok' });
  } else {

    const holiday = holidaysRepository.create(ibgeCode, holidayDate, 'F', name);

    return response.status(201).json({ message: 'ok' });
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
