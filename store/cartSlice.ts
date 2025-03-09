import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer
