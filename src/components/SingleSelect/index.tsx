import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MenuItemSX } from './styled'
import { useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHooks'
import {
  getOrderSelectedValue,
  setOrderSelectedValue,
} from '@features/global/globalSlice'

const SingleSelect: React.FC = () => {
  const selectOptions = [
    'Default Order',
    'Popularity (Highest to lowest)',
    'Popularity (Lowest to highest)',
    'Date (Newest to oldest)',
    'Date (Oldest to newest)',
    'Comments (Largest amount to lowest)',
    'Comments (Lowest amount to largest)',
  ]

  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector(getOrderSelectedValue)

  const onSelect = useCallback(
    (selectedItems: string[]) => {
      dispatch(setOrderSelectedValue(selectedItems))
    },
    [dispatch],
  )

  const selectLabel = useMemo(
    () => (selectedItems == false ? 'Order by...' : selectedItems),
    [selectedItems],
  )

  const handleChange = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const value = event.target.value
      const targetValue: string[] = typeof value === 'string' ? [value] : value
      onSelect(targetValue)
    },
    [onSelect],
  )

  return (
    <Select
      data-testid="multiple-select"
      label={selectLabel}
      value={selectedItems}
      onChange={handleChange}
    >
      {selectOptions.map((item, k) => (
        <MenuItem
          key={k}
          value={item}
          sx={() => MenuItemSX({ selectedItems, item })}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SingleSelect
