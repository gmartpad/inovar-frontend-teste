import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { MenuItemSX } from './styled'
import { useCallback, useMemo } from 'react'

interface MultipleSelectProps {
  selectedItems: string[]
  selectOptions: string[]
  onSelect: (items: string[]) => void
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  selectedItems,
  selectOptions,
  onSelect,
}) => {
  const selectLabel = useMemo(
    () =>
      selectedItems?.length === 0 ? 'Filtrar...' : selectedItems.join(', '),
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
      multiple
      label={selectLabel}
      value={selectedItems}
      onChange={handleChange}
    >
      {selectOptions.map((item) => (
        <MenuItem
          key={item}
          value={item}
          sx={() => MenuItemSX({ selectedItems, item })}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}

export default MultipleSelect
