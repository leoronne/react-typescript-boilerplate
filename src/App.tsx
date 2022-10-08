import Providers, { ThemeProvider } from './providers';
import Routes from './routes';

function App() {
  return (
    <Providers with={[ThemeProvider]}>
      <Routes />
    </Providers>
  );
}

export default App;
