import Providers, { ThemeProvider, LanguageProvider } from './providers';
import Routes from './routes';

function App() {
  return (
    <Providers with={[ThemeProvider, LanguageProvider]}>
      <Routes />
    </Providers>
  );
}

export default App;
