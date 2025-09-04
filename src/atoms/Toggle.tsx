import styled from "styled-components";

export const Toggle = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: calc(var(--core-space-4) * 4);
  height: calc(var(--core-space-4) * 2);
  border: 2px solid var(--semantic-color-form-control-border);
  border-radius: calc(var(--core-space-4) * 1.25);
  background: var(--semantic-color-form-control-bg);
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
  padding: 12px;

  &::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--core-space-4) * 1.5);
    height: calc(var(--core-space-4) * 1.5);
    background: var(--semantic-color-form-control-border);
    border-radius: 50%;
    transition: left 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:checked {
    background: var(--semantic-color-form-control-checked);
    border-color: var(--semantic-color-form-control-checked);

    &::after {
      left: calc(100% - calc(var(--core-space-4) * 1.1) - 2px);
      background: var(--semantic-color-form-control-bg);
      transform: translateY(-50%) scale(0.95);
    }
  }

  &:hover {
    border-color: var(--semantic-color-form-control-checked);
  }

  &:focus {
    outline: 2px solid var(--semantic-color-form-control-checked);
    outline-offset: 2px;
  }
`;
