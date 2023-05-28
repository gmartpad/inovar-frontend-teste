import React, { useState, useRef } from 'react'
import { Popover, InputLabel } from '@mui/material'
import {
  StyledBurgerMenu,
  StyledBurgerMenuContainer,
  StyledFilterButton,
  StyledFilterListIcon,
  StyledForm,
  StyledFormContainer,
  StyledMenuIcon,
} from './styled'
import MultipleSelect from '@components/MultipleSelect'

interface BurgerMenuProps {
  selectedItems: string[]
  onSelect: (selectedItems: string[]) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ selectedItems, onSelect }) => {
  const [open, setOpen] = useState<boolean>(false)

  const anchorEl = useRef<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl.current = event.currentTarget
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    anchorEl.current = null
  }

  const filterValues = ['One', 'Two', 'Three']

  return (
    <StyledBurgerMenuContainer data-testid="burger-menu">
      <StyledBurgerMenu data-testid="burger-menu-button" onClick={handleClick}>
        <StyledMenuIcon open={open} />
        <StyledFilterListIcon open={open} />
      </StyledBurgerMenu>
      {open && (
        <Popover
          data-testid="burger-menu-popover"
          open={open}
          anchorEl={anchorEl.current}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <StyledFormContainer>
            <StyledForm>
              <InputLabel data-testid="burger-input-label">
                {selectedItems?.length === 0
                  ? 'Filtrar...'
                  : selectedItems.join(', ')}
              </InputLabel>
              <MultipleSelect
                selectedItems={selectedItems}
                selectOptions={filterValues}
                onSelect={onSelect}
              />
              <StyledFilterButton
                onClick={() => console.log('aiai')}
                variant="contained"
              >
                Aplicar Filtros
              </StyledFilterButton>
            </StyledForm>
          </StyledFormContainer>
        </Popover>
      )}
    </StyledBurgerMenuContainer>
  )
}

export default BurgerMenu
