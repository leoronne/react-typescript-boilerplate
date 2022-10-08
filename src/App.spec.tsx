import { render } from 'utils/test-utils';
import App from './App';

describe('<App />', () => {
  it('Should render', async () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
