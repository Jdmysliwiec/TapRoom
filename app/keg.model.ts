export class Keg {
  public pints: number = 124;
  public happyHour: boolean = false;
  constructor(public name: string, public brand: string, public style: string, public price: number, public abv: number){}
}
