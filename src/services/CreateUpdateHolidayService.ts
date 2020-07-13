import Holiday from '../models/Holiday';
import HolidaysRepository from '../repositories/HolidaysRepository';

interface Request {
  ibgeCode: string;
  holidayDate: string;
  dateType: string;
  name: string;
}

class CreateUpdateHolidayService {

  private holidaysRepository: HolidaysRepository;

  constructor(holidaysRepository: HolidaysRepository) {
    this.holidaysRepository = holidaysRepository;
  }

  public execute({ ibgeCode, holidayDate, dateType, name }: Request): number {
    const findHolidayInSameDateAndPlace = this.holidaysRepository.findByDateAndPlaceAndUpdate(ibgeCode, holidayDate, name);
    let holiday: Holiday;

    if (findHolidayInSameDateAndPlace) {
      return 200;
    } else {
      holiday = this.holidaysRepository.create({ ibgeCode, holidayDate, dateType, name });
      return 201;
    }
  }
}

export default CreateUpdateHolidayService;
