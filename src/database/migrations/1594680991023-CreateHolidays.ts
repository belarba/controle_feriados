import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHolidays1594680991023 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'holidays',
        columns: [
          {
            name: 'ibgeCode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'dateType',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('holidays');
  }

}
