import renderer from 'react-test-renderer';
import StartPage from '../components/StartPage';

describe('StartPage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<StartPage />);
    expect(page).toMatchSnapshot();
  });
});
