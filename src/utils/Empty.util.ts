export interface IEmpty {
  readonly isEmpty: true
}

export function isEmpty<T>(value: IEmpty | T): value is IEmpty {
  return (value as IEmpty).isEmpty
}
