'use client'

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --color-success: #28a745;
    --color-danger: #dc3545;
    --color-warning: #ffc107;
    --color-info: #17a2b8;
    --color-light: #f8f9fa;
    --color-dark: #343a40;
    --color-white: #ffffff;
    --color-black: #000000;

    --font-primary: 'Arial', sans-serif;
    --font-secondary: 'Helvetica', sans-serif;

    --font-size-small: 0.875rem;
    --font-size-normal: 1rem;
    --font-size-large: 1.25rem;
    --font-size-xlarge: 1.5rem;

    --spacing-small: 0.5rem;
    --spacing-medium: 1rem;
    --spacing-large: 1.5rem;

    --border-radius: 0.25rem;
  }

  body {
    font-family: var(--font-primary);
    font-size: var(--font-size-normal);
    line-height: 1.5;
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    margin-bottom: var(--spacing-small);
  }

  button {
    font-size: var(--font-size-normal);
    padding: var(--spacing-small) var(--spacing-small);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
  }

  input {
    font-size: var(--font-size-normal);
    padding: var(--spacing-small);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-secondary);
  }
`;

export const Card = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: var(--spacing-large);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  &:hover {
    background-color: darken(var(--color-primary), 10%);
  }
`;

export const Label = styled.label`
  font-size: var(--font-size-small);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-small);
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: var(--spacing-medium);
`;