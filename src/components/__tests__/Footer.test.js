import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

it('renders the logo correctly', () => {
    render(<Footer />);
    const logoImg = screen.getByRole('img');
    expect(logoImg).toHaveAttribute('src', 'logo.png');
    expect(logoImg).toHaveAttribute('alt', 'company-logo');
});

it('renders correctly', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toMatchSnapshot();
});

