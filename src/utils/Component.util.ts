import React from 'react'

export function filterByLabel(
  typed: string,
  option?: { label?: React.ReactNode },
) {
  const label = option?.label?.toString().toLowerCase() || ''
  const match = label.indexOf(typed.toLowerCase()) >= 0
  return match
}
