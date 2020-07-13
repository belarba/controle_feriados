import Holiday from '../models/Holiday';

class HolidaysRepository {
  private holidays: Holiday[];

  constructor() {
    this.holidays = [];
  }

  public findByDateAndPlace(ibgeCode: string, holidayDate: string): Holiday | null {
    const findHolidayInSameDateAndPlace = this.holidays.find(function (holiday) {
      if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
        return holiday;
      }
    });
    return findHolidayInSameDateAndPlace || null;
  }

  public findByDateAndPlaceAndRemove(ibgeCode: string, holidayDate: string): number {
    const findHolidayInSameDateAndPlace = this.holidays.findIndex(function (holiday, index) {
      if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
        return index;
      }
    });

    if (findHolidayInSameDateAndPlace >= 0) {
      this.holidays.splice(findHolidayInSameDateAndPlace, 1)
    }

    return findHolidayInSameDateAndPlace;
  }

  public findByDateAndPlaceAndUpdate(ibgeCode: string, holidayDate: string, name: string): Holiday | null {
    const findHolidayInSameDateAndPlace = this.holidays.find(function (holiday) {
      if (holiday.ibgeCode == ibgeCode && holiday.date == holidayDate) {
        holiday.name = name;
        return holiday;
      }
    });
    return findHolidayInSameDateAndPlace || null;
  }

  public create(ibgeCode: string, holidayDate: string, dateType: string, name: string): Holiday {
    const holiday = new Holiday(ibgeCode, holidayDate, dateType, name);
    this.holidays.push(holiday);
    return holiday;
  }
}

export default HolidaysRepository;
