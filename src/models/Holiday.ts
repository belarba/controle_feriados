import { Entity, Column } from 'typeorm';

@Entity('holidays')
class Holiday {
  @Column()
  ibgeCode: string;

  @Column()
  date: string;

  @Column()
  dateType: 'F' | 'M';

  @Column()
  name: string;
}

export default Holiday;
