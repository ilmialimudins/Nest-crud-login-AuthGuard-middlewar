import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_id_pk', ['userId'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column('character varying', {
    name: 'user_name',
    nullable: true,
    length: 50,
  })
  userName: string | null;

  @Column('text', { name: 'password', nullable: true })
  password: string | null;
}
