import { Column, Entity, Index } from "typeorm";

@Index("pk_order_detail", ["orderId"], { unique: true })
@Entity("order_detail", { schema: "public" })
export class OrderDetail {
  @Column("smallint", { primary: true, name: "order_id" })
  orderId: number;

  @Column("smallint", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("real", { name: "unit_price", nullable: true, precision: 24 })
  unitPrice: number | null;

  @Column("smallint", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("real", { name: "discount", nullable: true, precision: 24 })
  discount: number | null;
}
