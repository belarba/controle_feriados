import Holiday from '../models/Holiday';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Holiday)
class HolidaysRepository extends Repository<Holiday> {
  public async findByDateAndPlace(ibgeCode: string, holidayDate: string): Promise<Holiday | null> {

    const findHolidayInSameDateAndPlace = await this.findOne({
      ibgeCode: ibgeCode, date: holidayDate
    });

    return findHolidayInSameDateAndPlace || null;
  }

  // public findByDateAndPlaceAndRemove(ibgeCode: string, holidayDate: string): number {
  //   const findHolidayInSameDateAndPlace = this.holidays.findIndex(function (holiday, index) {
  //     if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
  //       return index;
  //     }
  //   });

  //   if (findHolidayInSameDateAndPlace >= 0) {
  //     this.holidays.splice(findHolidayInSameDateAndPlace, 1)
  //   }

  //   return findHolidayInSameDateAndPlace;
  // }

  // public findByDateAndPlaceAndUpdate(ibgeCode: string, holidayDate: string, name: string): Holiday | null {
  //   const findHolidayInSameDateAndPlace = this.holidays.find(function (holiday) {
  //     if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
  //       holiday.name = name;
  //       return holiday;
  //     }
  //   });
  //   return findHolidayInSameDateAndPlace || null;
  // }
}

export default HolidaysRepository;
