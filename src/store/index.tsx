import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import globalReducer from '@store/features/global/globalSlice'
import { createWrapper } from 'next-redux-wrapper'

export function makeStore() {
  return configureStore({
    reducer: {
      global: globalReducer,
    },
    devTools: true,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

const wrapper = createWrapper<AppStore>(makeStore)
const store = makeStore()

export { wrapper, store }
