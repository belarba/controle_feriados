import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { HolidaySeed } from '../seed/holiday.seed'

export class SeedNationalHoliday1594747581786 implements MigrationInterface {

  public async up(_: QueryRunner): Promise<any> {
    await getRepository('holidays').save(
      HolidaySeed
    );
  }

  public async down(_: QueryRunner): Promise<any> {
    // do nothing
  }

}
