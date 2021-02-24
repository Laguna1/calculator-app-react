import renderer from 'react-test-renderer';
import MainPage from '../components/StartPage';

describe('MainPage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<MainPage />);
    expect(page).toMatchSnapshot();
  });
});
