import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Countries } from './Countries';

@Index('region_id_pk', ['regionId'], { unique: true })
@Entity('regions', { schema: 'public' })
export class Regions {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'region_id' })
  regionId: number;

  @Column('character varying', {
    name: 'region_name',
    nullable: true,
    length: 25,
  })
  regionName: string | null;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];
}

exports.Regions = Regions;
exports.default = Regions;
