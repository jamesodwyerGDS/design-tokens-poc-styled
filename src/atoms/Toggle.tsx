import styled from "styled-components";

export const Toggle = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: calc(var(--core-space-4) * 2);
  height: var(--core-space-4);
  border: 1px solid var(--semantic-color-form-control-border);
  border-radius: calc(var(--core-space-4) / 2);
  background: var(--semantic-color-form-control-bg);
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--core-space-4) - 4px);
    height: calc(var(--core-space-4) - 4px);
    background: var(--semantic-color-form-control-border);
    border-radius: 50%;
    transition: left 0.2s ease, background 0.2s ease;
  }

  &:checked {
    background: var(--semantic-color-form-control-checked);
    border-color: var(--semantic-color-form-control-checked);

    &::after {
      left: calc(100% - (var(--core-space-4) - 2px));
      background: var(--semantic-color-form-control-bg);
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
