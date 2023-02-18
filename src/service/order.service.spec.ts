import Customer from "../entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/orderItem"
import OrderService from "./order.service"

describe('Order service unit tests', () => {
  it('should place an order ', () => {
    const customer = new Customer("c1", "Customer 1")
    const orderItem1 = new OrderItem("i1", "Item 1", 100, "p1", 1)
    const order = OrderService.placeOrder(customer, [orderItem1])
    expect(customer.rewardPoints).toBe(50)
    expect(order.total()).toBe(100)
  }) 
  it('should get total of all orders', () => {
    const orderItem1 = new OrderItem("1234", "Item 1", 100, "1234", 1)
    const orderItem2 = new OrderItem("6789", "Item 2", 200, '6789', 2)

    const order1  = new Order("o1", 'c1', [orderItem1])
    const order2  = new Order("o2", 'c2', [orderItem2])

    const total = OrderService.getTotal([order1, order2])
    
    expect(total).toBe(500)

  })
})