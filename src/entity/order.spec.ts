import { faker } from '@faker-js/faker';

import Order  from './order';
import OrderItem from './orderItem';

describe('Order unit test', () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const order = new Order('', faker.datatype.uuid(), [])
    }).toThrowError('Id is required')
  })

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order(faker.datatype.uuid(), '', [])
    }).toThrowError('CustomerId is required')
  })

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order(faker.datatype.uuid(), faker.datatype.uuid(), [])
    }).toThrowError('Items are required')
  })

  it("should calculate total", () => {
    const priceOne = 100;
    const priceTwo = 200;
    const priceTotal = priceOne + priceTwo

    const item1 = new OrderItem(faker.datatype.uuid(), faker.random.words(), priceOne, faker.datatype.uuid(), 2)
    const order1 = new Order(faker.datatype.uuid(), faker.datatype.uuid(), [item1])
    expect(order1.total()).toBe(200)

    const item2 = new OrderItem(faker.datatype.uuid(), faker.random.words(), priceTwo, faker.datatype.uuid(), 2)
    const order2 = new Order(faker.datatype.uuid(), faker.datatype.uuid(), [item1, item2])
    expect(order2.total()).toBe(600)
  })

  it("should throw error if the item quantity is less or equal than zero", () => {
    const priceOne = 100;
    expect(() => {
      const item1 = new OrderItem(faker.datatype.uuid(), faker.random.words(), priceOne, faker.datatype.uuid(), 0)
      const order1 = new Order(faker.datatype.uuid(), faker.datatype.uuid(), [item1])
    }).toThrowError('Quantity must be greater than 0')

  })

})