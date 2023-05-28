import BurgerMenu from '@components/BurgerMenu'
import { useState } from 'react'

function TestBurgerMenu() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (selectedItems: string[]) => {
    setSelectedItems(selectedItems)
  }
  return (
    <div data-testid="burger-menu-background">
      <BurgerMenu selectedItems={selectedItems} onSelect={handleSelect} />
      <span data-testid="click-span"></span>
    </div>
  )
}

export default TestBurgerMenu
