import { Form, Button, Input, Switch, InputNumber, Select } from 'antd'
import React from 'react'

import { ICreateProductInput } from '../../../services/Product.service'
import { filterByLabel } from '../../../utils/Component.util'
import { IFormProps } from '../IForm'

import { ActiveProductTooltip } from './ActiveProductTooltip.component'

interface IProductFormProps extends IFormProps<ICreateProductInput> {
  categories: { label: string; value: string }[]
  categoriesLoading: boolean
}

export function ProductForm({
  onCreate,
  categories,
  form,
  categoriesLoading,
  onChange,
  loading,
}: IProductFormProps) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onCreate()
  }

  return (
    <Form
      autoComplete="off"
      title="Adicionar novo produto"
      layout="vertical"
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
      <Form.Item label="Preço" required>
        <InputNumber
          style={{ width: '100%' }}
          onChange={value => onChange({ target: { name: 'price', value } })}
          min={0.01}
          step={0.25}
          value={form.price}
          name="price"
          title="Preço"
          placeholder="Preço"
          required
        />
      </Form.Item>
      <Form.Item label="Categoria">
        <Select
          showSearch
          allowClear
          loading={categoriesLoading}
          options={categories}
          value={form.categoryId || ''}
          placeholder="Selecione uma categoria"
          onSelect={value =>
            onChange({ target: { name: 'categoryId', value } })
          }
          filterOption={filterByLabel}
        />
      </Form.Item>
      <Form.Item label="Descrição">
        <Input.TextArea
          onChange={onChange}
          value={form.description}
          name="description"
          title="Descrição Opcional"
          placeholder="Descrição Opcional"
        />
      </Form.Item>
      <Form.Item label="Ativo?" tooltip={ActiveProductTooltip}>
        <Switch
          onChange={checked =>
            onChange({ target: { checked, name: 'active', type: 'checkbox' } })
          }
          checked={form.active}
        />
      </Form.Item>
      <Button loading={loading} type="primary" htmlType="submit">
        Salvar
      </Button>
    </Form>
  )
}
