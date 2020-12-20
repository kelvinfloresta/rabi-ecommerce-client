import React from 'react'
import { PageHeader } from 'antd'

export function Header (props: {title: string}) {
  return <PageHeader
      title={props.title}
    />
}
