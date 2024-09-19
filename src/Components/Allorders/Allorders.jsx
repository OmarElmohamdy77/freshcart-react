import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Allorders() {


  let { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <div>Allorders</div>
  )
}