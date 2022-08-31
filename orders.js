const orders = [
    {
    id: 1,
    bread: "flatbread",
    meat: "Salami",
    vegetables: "jalapeno",
    sauces: "Garlic Aioli", 
    instructions: "no cheese",
    },
]



export const getOrders = () => {
    const newOrder = orders.map((item => ({...item})))
    return newOrder
  }

  const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }
  
  export const addNewOrder = (order) => {
    let newId = getNewOrderId()
    order.id = newId
    orders.unshift(order)
    document.dispatchEvent(new CustomEvent("stateChanged"))

  }
    document.dispatchEvent(new CustomEvent("stateChanged"))
