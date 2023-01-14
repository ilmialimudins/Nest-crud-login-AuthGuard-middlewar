import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Categories } from './Categories';
import { Supplier } from './Supplier';

@Index('pk_products_id', ['productsId'], { unique: true })
@Entity('products', { schema: 'public' })
export class Products {
  @Column('smallint', { primary: true, name: 'products_id' })
  productsId: number;

  @Column('character varying', {
    name: 'products_name',
    nullable: true,
    length: 40,
  })
  productsName: string | null;

  @Column('character varying', {
    name: 'quantity_per_unit',
    nullable: true,
    length: 20,
  })
  quantityPerUnit: string | null;

  @Column('real', { name: 'unit_price', nullable: true, precision: 24 })
  unitPrice: number | null;

  @Column('smallint', { name: 'units_in_stock', nullable: true })
  unitsInStock: number | null;

  @Column('smallint', { name: 'units_in_order', nullable: true })
  unitsInOrder: number | null;

  @Column('smallint', { name: 'reorder_leve', nullable: true })
  reorderLeve: number | null;

  @Column('integer', { name: 'discontinued', nullable: true })
  discontinued: number | null;

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'categoryId' }])
  category: Categories;

  @ManyToOne(() => Supplier, (supplier) => supplier.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'supplier_id', referencedColumnName: 'supplierId' }])
  supplier: Supplier;
}
