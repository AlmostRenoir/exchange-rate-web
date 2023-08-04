export class CurrencyRequest {
  constructor(
    public readonly id: string,
    public readonly currency: string,
    public readonly name: string,
    public readonly date: Date,
    public readonly value: number
  ) {}
}