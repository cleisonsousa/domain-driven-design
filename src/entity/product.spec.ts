import { faker } from '@faker-js/faker';

import Product  from './product';

describe('Product unit test', () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product('', faker.random.words(), faker.datatype.number())
    }).toThrowError('Id is required')
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product(faker.datatype.uuid(), '', faker.datatype.number())
    }).toThrowError('Name is required')
  })

  it("should throw error when price is less than zero", () => {
    expect(() => {
      const product = new Product(faker.datatype.uuid(), faker.random.words(), -1)
    }).toThrowError('Price must be greater than 0')
  })

  it("should change name", () => {
    const name = faker.random.words();
    const product = new Product(faker.datatype.uuid(), faker.random.words(), faker.datatype.number())
    product.changeName(name)
    expect(product.name).toBe(name)
  })

  it("should change price", () => {
    const price = faker.datatype.number();
    const product = new Product(faker.datatype.uuid(), faker.random.words(), faker.datatype.number())
    product.changePrice(price)
    expect(product.price).toBe(price)
  })
})