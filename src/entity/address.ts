export default class Address {
  private _streat: string = ""
  private _number: number = 0
  private _zip: string = ""
  private _city: string = ""

  constructor(streat : string, number: number, zip: string, city: string) {
    this._streat = streat
    this._number = number
    this._zip = zip
    this._city = city

    this.validate()
  }

  private validate() {
    if(!this._streat) {
      throw new Error("Streat is required")
    }

    if(!this._number) {
      throw new Error("Number is required")
    }

    if(!this._zip) {
      throw new Error("Zip is required")
    }

    if(!this._city) {
      throw new Error("City is required")
    }
  }

  toString() {
    return `${this._streat} ${this._number}, ${this._zip} ${this._city}`
  }
}