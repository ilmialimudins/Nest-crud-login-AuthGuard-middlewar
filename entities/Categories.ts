import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Products } from './Products';

@Index('pk_category_id', ['categoryId'], { unique: true })
@Entity('categories', { schema: 'public' })
export class Categories {
  @Column('smallint', { primary: true, name: 'category_id' })
  categoryId: number;

  @Column('character varying', {
    name: 'category_name',
    nullable: true,
    length: 15,
  })
  categoryName: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('integer', { name: 'picture', nullable: true })
  picture: number | null;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
