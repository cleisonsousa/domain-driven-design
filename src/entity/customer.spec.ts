import { faker } from '@faker-js/faker';
import Address from './address';

import Customer  from './customer';

describe('Customer unit test', () => {
  it("should throw error when if id empty", () => {
    expect(() => {
      new Customer("", faker.random.words())
    }
    ).toThrowError("Id is required")
  })

  it("should throw error when if name empty", () => {
    expect(() => {
      new Customer(faker.datatype.uuid(), "")
    }
    ).toThrowError("Name is required")
  })

  it("should change name", () => {
    const name = faker.random.words()
    // Arange
    const customer = new Customer(faker.datatype.uuid(), faker.random.words())
    // Act
    customer.changeName(name)
    // Assert
    expect(customer.name).toBe(name)
  })

  it("should activate customer", () => {
    const address = new Address(faker.address.street(), faker.datatype.number(), faker.address.zipCode(), faker.address.city())
    let customer = new Customer(faker.datatype.uuid(), faker.random.words())
    customer.Address = address
    customer.activate()
    expect(customer.isActive()).toBeTruthy()
  })

  it("should thrown error when address is undefined when you activate", () => {
    expect(() => {
      const customer = new Customer(faker.datatype.uuid(), faker.random.words())
      customer.activate()
    }).toThrowError('Address is mandatory to activate a customer')

  })

  it("should deactivate customer", () => {
    let customer = new Customer(faker.datatype.uuid(), faker.random.words())
    customer.deactivate()
    expect(customer.isActive()).toBeFalsy()
  })

  it("should add reward points", () => {
    let customer = new Customer(faker.datatype.uuid(), faker.random.words())
    expect(customer.rewardPoints).toBe(0)

    customer.addRewardPoints(10)
    expect(customer.rewardPoints).toBe(10)

    customer.addRewardPoints(10)
    expect(customer.rewardPoints).toBe(20)
  })
})