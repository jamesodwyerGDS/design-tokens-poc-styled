import styled from 'styled-components'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: var(--radius-sm);
  padding: var(--core-space-1);
  background: var(--core-color-grey-100);
  gap: var(--core-space-1);
`

const ToggleButton = styled.button<{ active: boolean }>`
  height: 40px;
  padding: 0 var(--core-space-4);
  background: ${props => props.active ? 'var(--core-color-black)' : 'transparent'};
  border: 1px solid var(--core-color-black);
  border-radius: var(--radius-sm);
  font: var(--semantic-typography-label-medium);
  color: ${props => props.active ? 'var(--core-color-white)' : 'var(--core-color-black)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? 'var(--core-color-black)' : 'var(--core-color-grey-300)'};
  }

  &:focus {
    outline: 2px solid var(--core-color-black);
    outline-offset: 2px;
  }
`

type Theme = 'ticketmaster' | 'livenation'

interface ThemeToggleProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <ToggleWrapper>
      <ToggleButton
        active={currentTheme === 'ticketmaster'}
        onClick={() => onThemeChange('ticketmaster')}
        type="button"
      >
        Ticketmaster
      </ToggleButton>
      <ToggleButton
        active={currentTheme === 'livenation'}
        onClick={() => onThemeChange('livenation')}
        type="button"
      >
        Live Nation
      </ToggleButton>
    </ToggleWrapper>
  )
}
