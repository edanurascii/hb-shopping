import { render, screen } from '../test-utils'
import App from './App'

test('renders learn react link', () => {
    render(<App />)
    const app = screen.getByTestId('hepsiburada-app')
    expect(app).toBeInTheDocument()
})