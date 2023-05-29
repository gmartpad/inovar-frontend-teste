import '@styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '@src/theme'
import Header from '@components/Header'
import Footer from '@components/Footer'
import AppContainer from '@components/AppContainer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default MyApp
