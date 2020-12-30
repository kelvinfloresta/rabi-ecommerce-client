import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { ReactNode } from 'react'

interface IToolbarButtonProps {
  onClick(): void
  loading?: boolean
  children: ReactNode
  type?: 'add' | 'reload'
}

const add = <PlusOutlined />
const reload = <ReloadOutlined />

export function ToolbarButton({
  type = 'add',
  loading,
  onClick,
  children,
}: IToolbarButtonProps) {
  const icon = type === 'add' ? add : reload
  return (
    <Button loading={loading} type="dashed" icon={icon} onClick={onClick}>
      {children}
    </Button>
  )
}
