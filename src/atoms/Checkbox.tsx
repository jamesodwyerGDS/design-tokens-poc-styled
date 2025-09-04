import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: var(--core-space-4);
  height: var(--core-space-4);
  border: 1px solid var(--semantic-color-form-control-border);
  border-radius: var(--semantic-radius-sm);
  background: var(--semantic-color-form-control-bg);
  cursor: pointer;
  position: relative;

  &:checked {
    background: var(--semantic-color-form-control-checked);
    border-color: var(--semantic-color-form-control-checked);

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 4px;
      height: 8px;
      border: solid var(--semantic-color-form-control-bg);
      border-width: 0 2px 2px 0;
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
