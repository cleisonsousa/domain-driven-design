/* 
  Complexidade de negócio
  Domain
   - Entity
    -- customer.ts (regra de negócio)

  Complexidade de acidental
  Infra
   - Entity / Model
    -- customer.ts (get, set)
*/

class Customer {
  _id: string
  _name: string
  _address: string
  _active: boolean = false

  constructor(id: string, name: string, address: string) {
    this._id = id
    this._name = name
    this._address = address

    this.validate()
  }

  private validate() {
    if (!this._name) {
      throw new Error("Name is required")
    }

    if(!this._id) {
      throw new Error("Id is required")
    }
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  activate() {
    if(!this._address) {
      throw new Error("Address is mandatory to activate a customer")
    }

    this._active = true
  }

  deactivate() {
    this._active = false
  }
}

