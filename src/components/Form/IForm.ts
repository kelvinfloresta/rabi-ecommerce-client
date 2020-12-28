export interface ChangeEvent {
  target: {
    name: string
    value?: string | number
    checked?: boolean
    type?: 'checkbox' | string
  }
}

export interface IFormProps<T> {
  form: T
  loading: boolean
  onCreate(): void
  onCancel?: () => void
  onChange(event: ChangeEvent): void
}
