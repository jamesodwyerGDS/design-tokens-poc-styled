import styled from "styled-components";

// Styled container for the icons
export const ThemeIcon = styled.span`
  display: inline-flex;
  gap: var(--core-space-1);
  margin-left: var(--core-space-2);
  vertical-align: middle;

  svg {
    width: var(--core-space-3);
    height: var(--core-space-3);
    fill: currentColor;
  }
`;
