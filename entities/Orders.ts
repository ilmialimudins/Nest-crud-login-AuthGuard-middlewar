import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Customers } from "./Customers";
import { Employees } from "./Employees";
import { Shippers } from "./Shippers";

@Index("pk_orders_id", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @Column("date", { primary: true, name: "order_id" })
  orderId: string;

  @Column("date", { name: "required_data", nullable: true })
  requiredData: string | null;

  @Column("date", { name: "shipper_data", nullable: true })
  shipperData: string | null;

  @Column("real", { name: "freight", nullable: true, precision: 24 })
  freight: number | null;

  @Column("character varying", {
    name: "ship_name",
    nullable: true,
    length: 40,
  })
  shipName: string | null;

  @Column("character varying", {
    name: "ship_address",
    nullable: true,
    length: 60,
  })
  shipAddress: string | null;

  @Column("character varying", {
    name: "ship_city",
    nullable: true,
    length: 15,
  })
  shipCity: string | null;

  @Column("character varying", {
    name: "ship_region",
    nullable: true,
    length: 15,
  })
  shipRegion: string | null;

  @Column("character varying", {
    name: "ship_postal",
    nullable: true,
    length: 10,
  })
  shipPostal: string | null;

  @Column("character varying", {
    name: "ship_country",
    nullable: true,
    length: 15,
  })
  shipCountry: string | null;

  @ManyToOne(() => Customers, (customers) => customers.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customerId" }])
  customer: Customers;

  @ManyToOne(() => Employees, (employees) => employees.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "employee_id", referencedColumnName: "employeeId" }])
  employee: Employees;

  @ManyToOne(() => Shippers, (shippers) => shippers.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "shipper_id", referencedColumnName: "shipperId" }])
  shipper: Shippers;
}
