import { Input, Button, Form } from 'antd'
import React from 'react'

import { ICreateCategoryInput } from '../../../services/Category.service'
import { IFormProps } from '../IForm'

export function CategoryForm({
  onCreate,
  form,
  onChange,
  loading,
}: IFormProps<ICreateCategoryInput>) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onCreate && onCreate()
  }

  return (
    <Form
      autoComplete="off"
      title="Adicionar nova categoria"
      layout="inline"
      onSubmitCapture={onSubmit}>
      <Form.Item label="Nome" required>
        <Input
          onChange={onChange}
          value={form.name}
          name="name"
          title="Nome"
          placeholder="Nome"
          required
        />
      </Form.Item>
      <Form.Item label="Descrição">
        <Input.TextArea
          cols={50}
          rows={1}
          onChange={onChange}
          value={form.description}
          name="description"
          showCount
          maxLength={250}
          title="Descrição"
          placeholder="Descrição opcional"
        />
      </Form.Item>
      <Button loading={loading} type="primary" htmlType="submit">
        Salvar
      </Button>
    </Form>
  )
}
