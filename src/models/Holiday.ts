import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('holidays')
class Holiday {

  @PrimaryColumn()
  ibgeCode: string;

  @PrimaryColumn()
  date: string;

  @Column()
  dateType: string;

  @Column()
  name: string;
}

export default Holiday;
