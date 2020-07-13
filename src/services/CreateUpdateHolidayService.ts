import Holiday from '../models/Holiday';
import { getCustomRepository } from 'typeorm'

import HolidaysRepository from '../repositories/HolidaysRepository';
import holidaysRouter from '../routes/holidays.routes';

interface Request {
  ibgeCode: string;
  holidayDate: string;
  dateType: 'F' | 'M';
  name: string;
}

class CreateUpdateHolidayService {
  public async execute({ ibgeCode, holidayDate, dateType, name }: Request): Promise<number> {
    const holidaysRepository = getCustomRepository(HolidaysRepository);

    const findHolidayInSameDateAndPlace = holidaysRepository.findByDateAndPlaceAndUpdate(ibgeCode, holidayDate, name);

    if (findHolidayInSameDateAndPlace) {
      return 200;
    } else {
      const holiday = holidaysRepository.create({ ibgeCode, date: holidayDate, dateType, name });
      await holidaysRepository.save(holiday);
      return 201;
    }
  }
}

export default CreateUpdateHolidayService;
