import styled from "styled-components";

export const Button = styled.button`
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-body-size);
  font-family: var(--font-family-base);

  background: var(--color-btn-bg);
  color: var(--color-btn-fg);
  border: 1px solid transparent;
  box-shadow: var(--elevation-1);
  cursor: pointer;

  &:hover {
    background: var(--color-accent);
  }

  &.secondary {
    background: var(--color-btn-secondary-bg);
    color: var(--color-btn-secondary-fg);
    border-color: var(--color-border);
  }
`;
