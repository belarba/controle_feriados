import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('holidays')
class Holiday {
  @PrimaryColumn()
  ibgeCode: string;

  @PrimaryColumn()
  date: string;

  @Column()
  dateType: 'F' | 'M';

  @Column()
  name: string;
}

export default Holiday;
