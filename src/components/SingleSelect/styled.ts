interface MenuItemSXProps {
  selectedItems: any
  item: string
}

export const MenuItemSX = ({ selectedItems, item }: MenuItemSXProps) => ({
  backgroundColor: selectedItems?.includes(item) ? 'primary' : '#fff',
  color: '#000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: selectedItems?.includes(item) ? 'primary' : '#fff',
    color: '#666',
    fontWeight: 'bold',
  },
})
