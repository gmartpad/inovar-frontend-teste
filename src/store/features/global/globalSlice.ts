import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '@store/index'
import types from '@store/types'

const initialState = {
  [types.ORDER_SELECTED_VALUE]: [],
  [types.POST_SEARCH_VALUE]: '',
  [types.DEBOUNCE_ACTIVE]: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOrderSelectedValue: (state, action: PayloadAction<string[]>) => {
      state.ORDER_SELECTED_VALUE = action.payload
    },
    setPostSearchValue: (state, action: PayloadAction<string>) => {
      state.POST_SEARCH_VALUE = action.payload
    },
    setDebounceActive: (state, action: PayloadAction<boolean>) => {
      state.DEBOUNCE_ACTIVE = action.payload
    },
  },
})

export const { setOrderSelectedValue, setPostSearchValue, setDebounceActive } =
  globalSlice.actions

// A função abaixo é chamada de seletor e nos permite selecionar um valor de
// o Estado. Os seletores também podem ser definidos em linha onde são usados em vez de
// no arquivo de fatia. Por exemplo: `useSelector((state: RootState) => state.counter.value)`
export const getOrderSelectedValue = (state: AppState) =>
  state.global.ORDER_SELECTED_VALUE
export const getPostSearchValue = (state: AppState) =>
  state.global.POST_SEARCH_VALUE
export const getDebounceActive = (state: AppState) =>
  state.global.DEBOUNCE_ACTIVE

export default globalSlice.reducer
