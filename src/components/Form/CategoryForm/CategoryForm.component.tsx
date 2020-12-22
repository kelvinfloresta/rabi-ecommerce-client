import React, { ChangeEvent } from 'react'
import { Input, Button, Form } from 'antd'

export interface ICategoryFormProps {
    categoryName: string;
    description?: string;
    loading: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function CategoryForm ({ categoryName, description, onChange, onSubmit, loading }: ICategoryFormProps) {
  return <Form autoComplete="off" title="Adicionar nova categoria" layout="inline" onSubmitCapture={onSubmit}>
      <Form.Item>
        <Input onChange={onChange} value={categoryName} name="name" title="Nome" placeholder="Nome" required />
      </Form.Item>
      <Form.Item>
        <Input.TextArea cols={50} rows={1} onChange={onChange} value={description} name="description" showCount maxLength={250} title="Descrição" placeholder="Descrição opcional" />
      </Form.Item>
      <Button loading={loading} type="primary" htmlType="submit">Salvar</Button>
    </Form>
}
