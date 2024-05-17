export const getOrders = () => {
  const orders = {
    header: "Order Managment",
    orders: [
      { id: 1, name: 'Orders', href: '#', current: false },
      { id: 2, name: 'Jobs', href: '#', current: false },
      { id: 3, name: 'Invoice managment', href: '#', current: false },
    ]
  }

  return orders
}

export const getProducts = () => {
  const products = {
    header: "Order Managment",
    prodcts: [
      { id: 1, name: 'Products', href: '#', current: false },
      { id: 2, name: 'Product types', href: '#', current: false },
      { id: 3, name: 'Product catigories', href: '#', current: false },
      { id: 4, name: 'Inventory managment', href: '#', current: false },
    ]
  }
}