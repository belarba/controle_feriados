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
}

export default HolidaysRepository;
