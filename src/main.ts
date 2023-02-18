import Address from './entity/address'
import Customer from './entity/customer'
import Order from './entity/order'
import OrderItem from './entity/orderItem'

let customer = new Customer("123", "Cleison Pereira")
const address = new Address('Rua três', 3, "20260-141", "Rio de Janeiro")
customer.Address = address
customer.activate()

const item1 = new OrderItem("1234", "Item 1", 20, "123", 10)
const item2 = new OrderItem("6789", "Item 2", 70, '123', 10)
const order  = new Order("123", '123', [item1, item2])