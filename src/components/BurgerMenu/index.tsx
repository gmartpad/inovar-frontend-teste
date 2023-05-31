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
import SingleSelect from '@components/SingleSelect'
import { useAppSelector } from '@store/reduxHooks'
import { getOrderSelectedValue } from '@features/global/globalSlice'

const BurgerMenu: React.FC = () => {
  const selectedItems = useAppSelector(getOrderSelectedValue)

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
                {selectedItems == false ? 'Order by...' : selectedItems}
              </InputLabel>
              <SingleSelect />
            </StyledForm>
          </StyledFormContainer>
        </Popover>
      )}
    </StyledBurgerMenuContainer>
  )
}

export default BurgerMenu
