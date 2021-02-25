import renderer from 'react-test-renderer';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import MainPage from '../components/MainPage';

describe('MainPage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<MainPage />);
    expect(page).toMatchSnapshot();
  });

  it('Display shows the clicked number', async () => {
    render(<MainPage />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    const res = await waitFor(() => screen.findAllByText('12'));
    expect(res).toHaveLength(1);
  });

  it('Caculator shows a zero upon launch', async () => {
    render(<MainPage />);
    const res = await waitFor(() => screen.findAllByText('0'));
    expect(res).toHaveLength(2);
  });

  it('Displays sum on addition of two numbers', async () => {
    render(<MainPage />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const res = await waitFor(() => screen.findAllByText('12'));
    expect(res).toHaveLength(1);
  });

  it('Displays product on multiplying of two numbers', async () => {
    render(<MainPage />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const res = await waitFor(() => screen.findAllByText('35'));
    expect(res).toHaveLength(1);
  });

  it('Changes the sign of the displayed figure when "+/-" is clicked', async () => {
    render(<MainPage />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+/-'));
    const res = await waitFor(() => screen.findAllByText('-57'));
    expect(res).toHaveLength(1);
  });

  it('Displays the percentantage of figure when "%" is clicked', async () => {
    render(<MainPage />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('%'));
    const newLocal = await waitFor(() => screen.findAllByText('0.05'));
    const res = newLocal;
    expect(res).toHaveLength(1);
  });
});
