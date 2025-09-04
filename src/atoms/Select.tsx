import styled from "styled-components";

export const Select = styled.select`
  padding: var(--core-space-2) var(--core-space-4);
  border-radius: var(--semantic-radius-sm);
  font: var(--semantic-typography-label-medium);
  min-width: 200px;
  background: var(--semantic-color-accent);
  color: var(--semantic-color-surface);
  border: 1px solid transparent;
  cursor: pointer;
  appearance: none;
  position: relative;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid var(--semantic-color-accent);
    outline-offset: 2px;
  }

  /* Custom dropdown arrow */
  background-image: 
    linear-gradient(45deg, transparent 50%, var(--semantic-color-surface) 50%),
    linear-gradient(135deg, var(--semantic-color-surface) 50%, transparent 50%);
  background-position:
    calc(100% - 15px) calc(50% + 2px),
    calc(100% - 10px) calc(50% + 2px);
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;
  padding-right: var(--core-space-6);
`;
