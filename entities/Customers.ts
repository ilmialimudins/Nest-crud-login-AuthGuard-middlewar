import { Column, Entity, Index, OneToMany } from "typeorm";
import { Orders } from "./Orders";

@Index("pk_customer_id", ["customerId"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @Column("character", { primary: true, name: "customer_id", length: 5 })
  customerId: string;

  @Column("character varying", {
    name: "company_name",
    nullable: true,
    length: 40,
  })
  companyName: string | null;

  @Column("character varying", {
    name: "contact_name",
    nullable: true,
    length: 30,
  })
  contactName: string | null;

  @Column("character varying", {
    name: "contact_title",
    nullable: true,
    length: 30,
  })
  contactTitle: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 60 })
  address: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 15 })
  city: string | null;

  @Column("character varying", { name: "region", nullable: true, length: 15 })
  region: string | null;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 10,
  })
  postalCode: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 15 })
  country: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 24 })
  phone: string | null;

  @Column("character varying", { name: "fax", nullable: true, length: 24 })
  fax: string | null;

  @OneToMany(() => Orders, (orders) => orders.customer)
  orders: Orders[];
}
