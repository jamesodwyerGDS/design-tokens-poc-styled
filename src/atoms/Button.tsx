import styled from "styled-components";

export const Button = styled.button`
  padding: var(--core-space-2) var(--core-space-3);
  border-radius: var(--core-radius-md);
  font: var(--semantic-typography-label-medium);

  background: var(--semantic-color-btn-bg);
  color: var(--semantic-color-btn-fg);
  border: 1px solid transparent;
  box-shadow: var(--core-elevation-1);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &.secondary {
    background: var(--semantic-color-btn-secondary-bg);
    color: var(--semantic-color-btn-secondary-fg);
    border-color: var(--semantic-color-border);
  }
`;
