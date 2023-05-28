import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { styled } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import FilterListIcon from '@mui/icons-material/FilterList'

// ----

export const StyledBurgerMenuContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 16,
})

// ----

export const StyledBurgerMenu = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  cursor: 'pointer',
  borderRadius: 4,
  border: '1px solid #ddd',
  transition: '.3s all ease-in-out',
  '&:hover': {
    backgroundColor: '#eee',
  },
})

// ----

interface StyledMenuIconProps {
  open: boolean
}

export const StyledMenuIcon = styled(MenuIcon)(
  ({ open = false }: StyledFilterListIconProps) => ({
    color: '#000',
    transition: '.3s all ease-in-out',
    opacity: open ? '0%' : '100%',
    position: 'absolute',
  }),
)

// ----

interface StyledFilterListIconProps extends StyledMenuIconProps {}

export const StyledFilterListIcon = styled(FilterListIcon)(
  ({ open = false }: StyledMenuIconProps) => ({
    color: '#000',
    transition: '.3s all ease-in-out',
    opacity: open ? '100%' : '0%',
    position: 'absolute',
  }),
)

// ----

export const StyledFormContainer = styled(Box)({
  height: 'fit-content',
  minWidth: 200,
  padding: 10,
})

// ----

export const StyledForm = styled(FormControl)({
  width: '100%',
})

// ----

export const StyledFilterButton = styled(Button)({
  marginTop: 10,
  textTransform: 'none',
})
