import { getCustomRepository } from 'typeorm'

import HolidaysRepository from '../repositories/HolidaysRepository';

interface Request {
  ibgeCode: string;
  holidayDate: string;
  dateType: 'F' | 'M';
  name: string;
}

class RemoveHolidayService {
  public async execute({ ibgeCode, holidayDate, dateType, name }: Request): Promise<number> {
    const holidaysRepository = getCustomRepository(HolidaysRepository);

    const findHolidayInSameDateAndPlace = await holidaysRepository.findByDateAndPlace(ibgeCode, holidayDate);

    if (findHolidayInSameDateAndPlace) {
      await holidaysRepository.delete(findHolidayInSameDateAndPlace);
      return 200;
    } else {
      return 404;
    }
  }
}

export default RemoveHolidayService;
