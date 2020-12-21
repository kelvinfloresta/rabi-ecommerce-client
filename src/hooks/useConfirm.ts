import { useState } from 'react'

export function useConfirm<T> () {
  const [openedConfirm, setOpenedConfirm] = useState<T | null>(null)

  function cleanConfirm () {
    setOpenedConfirm(null)
  }

  return {
    openedConfirm,
    setOpenedConfirm,
    cleanConfirm
  }
}
