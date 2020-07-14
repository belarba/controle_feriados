import Holiday from '../models/Holiday';
import { getCustomRepository } from 'typeorm'

import HolidaysRepository from '../repositories/HolidaysRepository';

import EasterSundayService from './EasterSundayService'

interface Request {
  ibgeCode: string;
  holidayDate: string;
}

class GetHolidayService {
  public async execute({ ibgeCode, holidayDate }: Request): Promise<string | null> {

    const easterSundayService = new EasterSundayService();

    const holidaysRepository = getCustomRepository(HolidaysRepository);

    //buscar data em nacional
    const findHolidayNational = await holidaysRepository.findByDateAndPlace('nacional', holidayDate);
    if (findHolidayNational) {
      return findHolidayNational.name
    }
    //buscar data em estadual
    const findHolidayState = await holidaysRepository.findByDateAndPlace(ibgeCode.substring(0, 2), holidayDate);
    if (findHolidayState) {
      return findHolidayState.name;
    }
    //buscar data em regional
    const findHolidayCity = await holidaysRepository.findByDateAndPlace(ibgeCode, holidayDate);
    if (findHolidayCity) {
      return findHolidayCity.name;
    }

    function formatDate(date: Date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }

    //verificar pascoa do ano buscado
    const year = holidayDate.substring(0, 4);
    const easter = easterSundayService.execute(parseInt(year));

    if (holidayDate == formatDate(easter).toString()) {
      return 'pascoa';
    }
    //ver se a data não é uma das relacionadas à pascoa
    var carnaval = new Date(easter);
    carnaval.setDate(easter.getDate() - 47);
    if (holidayDate == formatDate(carnaval).toString()) {
      return 'carnaval';
    }

    var corpusChristi = new Date(easter);
    corpusChristi.setDate(easter.getDate() + 60);
    if (holidayDate == formatDate(corpusChristi).toString()) {
      return 'corpus-christi';
    }

    var sextaSanta = new Date(easter);
    sextaSanta.setDate(easter.getDate() - 2);
    if (holidayDate == formatDate(sextaSanta).toString()) {
      return 'sexta-santa';
    }

    return null;
  }
}

export default GetHolidayService;
