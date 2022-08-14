import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
