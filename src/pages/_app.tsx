import '@styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from '@src/theme'
import Header from '@components/Header'
import Footer from '@components/Footer'
import AppContainer from '@components/AppContainer'
import ComponentContainer from '@components/ComponentContainer'
import { Provider } from 'react-redux'
import { store } from '@store/index'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <AppContainer>
          <Header />
          <ComponentContainer>
            <Component {...pageProps} />
          </ComponentContainer>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
