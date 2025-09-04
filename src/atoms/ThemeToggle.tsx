import styled from 'styled-components'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: var(--radius-sm);
  padding: var(--core-space-1);
  background: var(--semantic-color-accent-subtle);
  gap: var(--core-space-1);
`

const ToggleButton = styled.button<{ active: boolean }>`
  height: 40px;
  padding: 0 var(--core-space-4);
  background: ${props => props.active ? 'var(--semantic-color-accent)' : 'transparent'};
  border: none;
  border-radius: var(--radius-sm);
  font: var(--semantic-typography-label-medium);
  color: ${props => props.active ? 'var(--semantic-color-surface)' : 'var(--semantic-color-fg)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? 'var(--semantic-color-accent)' : 'var(--semantic-color-border)'};
  }

  &:focus {
    outline: 2px solid var(--semantic-color-accent);
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
