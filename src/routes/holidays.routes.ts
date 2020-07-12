import { Router } from 'express';
import Holiday from '../models/Holiday';

const holidaysRouter = Router();

const holidays: Holiday[] = [];

holidaysRouter.put('/:ibgeCode/:date', (request, response) => {
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  const name = request.body;

  const findHolidayInSameDateAndPlace = holidays.find(function (holiday) {
    if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
      holiday.name = name;
      return true;
    }
  });

  if (findHolidayInSameDateAndPlace) {
    return response.status(200).json({ message: 'ok' });
  } else {
    const holiday = new Holiday(ibgeCode, holidayDate, 'F', name);
    holidays.push(holiday);
    return response.status(201).json({ message: 'ok' });
  }



});

holidaysRouter.get('/:ibgeCode/:date', (request, response) => {
  return response.json({ feriados: holidays });
});

holidaysRouter.delete('/:ibgeCode/:date', (request, response) => {
  return response.json({ codigoibge: request.params.ibgeCode, data: request.params.date });
});

export default holidaysRouter;
