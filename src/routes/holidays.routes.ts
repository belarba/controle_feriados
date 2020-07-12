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
  const ibgeCode = request.params.ibgeCode;
  const holidayDate = request.params.date;
  let name = '';

  const findHolidayInSameDateAndPlace = holidays.find(function (holiday) {
    if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
      name = holiday.name;
      return true;
    }
  });

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

  const findHolidayInSameDateAndPlace = holidays.findIndex(function (holiday, index) {
    if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
      return index;
    }
  });

  if (findHolidayInSameDateAndPlace > 0) {
    holidays.splice(findHolidayInSameDateAndPlace, 1)
    return response.status(200).json({ message: 'ok' });
  } else {
    return response.status(404).json({ message: 'não encontrado' });
  }
});

export default holidaysRouter;
