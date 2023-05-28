import MultipleSelect from '@components/MultipleSelect'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'

function TestMultipleSelect({ selectOptions }: { selectOptions: string[] }) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (selectedItems: string[]) => {
    setSelectedItems(selectedItems)
  }

  return (
    <>
      <MultipleSelect
        selectedItems={selectedItems}
        onSelect={handleSelect}
        selectOptions={selectOptions}
      />
      <Box>
        {selectedItems.map((i) => (
          <Typography key={i} data-testid={`id_${i}`}>
            {i}
          </Typography>
        ))}
      </Box>
    </>
  )
}

export default TestMultipleSelect
