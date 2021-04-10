import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders properly', () => {
    render(<Button>default Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
