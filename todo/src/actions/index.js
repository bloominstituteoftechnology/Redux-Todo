let nextId = 0
export const addItem = (text) => ({
  type: 'AddItem',
  id: nextId++,
  text
})

export const toggleItem = (id) => ({
  type: 'ToggleItem',
  id
})

// deleteItem
