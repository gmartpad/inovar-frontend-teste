import '@styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '@src/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
