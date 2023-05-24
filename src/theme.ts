import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#E3472F',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 1200,
          '@media (min-width: 960px)': {
            maxWidth: 1200,
          },
        },
      },
    },
  },
})

export default customTheme
