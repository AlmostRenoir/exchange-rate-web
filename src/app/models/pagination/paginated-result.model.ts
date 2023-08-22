export class PaginatedResult<T> {
  constructor(
    public readonly content: ReadonlyArray<T>,
    public readonly totalPages: number
  ) {}
}