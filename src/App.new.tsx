import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './fonts.css'
import './base.css'

import { Button } from './atoms/Button'
import { Card } from './atoms/Card'
import { DisplayText, TitleText, BodyText, LabelText } from './atoms/Text'
import { Checkbox } from './atoms/Checkbox'
import { Radio } from './atoms/Radio'
import { Toggle } from './atoms/Toggle'
import { ThemeToggle } from './atoms/ThemeToggle'
import { UserIcon, SearchIcon, CalendarIcon, SettingsIcon, HeartIcon, TicketIcon } from './atoms/Icons'

const AppWrapper = styled.div`
  padding: var(--space-6);
  display: grid;
  gap: var(--space-6);
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--semantic-color-border);
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-4);
`

const TypographySection = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

const ControlsSection = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

const Surface = styled.div<{ elevation: 1 | 2 | 3 | 4 }>`
  background: var(--semantic-color-surface);
  border: 1px solid var(--semantic-color-border);
  border-radius: var(--brand-border-radius);
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  box-shadow: var(--elevation-${props => props.elevation});
`

const FormControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`

const ControlRow = styled.label`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
`

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--core-space-4);
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--core-space-2);
`

type Theme = 'ticketmaster' | 'livenation' | 'jo'

export default function App() {
  const [theme, setTheme] = useState<Theme>('ticketmaster')

  useEffect(() => {
    // Remove any previously injected theme CSS
    const prevLink = document.getElementById('theme-css')
    if (prevLink) {
      prevLink.parentNode?.removeChild(prevLink)
    }
    // Dynamically inject the correct theme CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = 'theme-css'
    link.href = `/css/_variables-${theme}.css`
    document.head.appendChild(link)
  }, [theme])

  return (
    <AppWrapper>
      <Header>
        <h1>GDS & Token Studio → styled-components demo</h1>
        <ThemeToggle
          currentTheme={theme}
          onThemeChange={setTheme}
        />
      </Header>

      <Grid>
        <TypographySection>
          <Card>
            <TitleText>Typography</TitleText>
            <DisplayText>Display: Big headline to demo scale</DisplayText>
            <BodyText>Body: This paragraph uses semantic tokens for font-size, weight and line-height.</BodyText>
            <LabelText>Label: Helper text or microcopy.</LabelText>
          </Card>

          <Card>
            <TitleText>Surfaces & Elevation</TitleText>
            <Surface elevation={1}>Elevation 1</Surface>
            <Surface elevation={2}>Elevation 2</Surface>
            <Surface elevation={3}>Elevation 3</Surface>
            <Surface elevation={4}>Elevation 4</Surface>
          </Card>
        </TypographySection>

        <ControlsSection>
          <Card>
            <TitleText>Buttons</TitleText>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <Button>Primary</Button>
              <Button className="secondary">Secondary</Button>
            </div>
          </Card>

          <Card>
            <TitleText>Form Controls</TitleText>
            <FormControls>
              <ControlRow>
                <Checkbox />
                <BodyText>Checkbox option</BodyText>
              </ControlRow>

              <ControlGroup>
                <ControlRow>
                  <Radio name="choice" value="1" />
                  <BodyText>Radio option 1</BodyText>
                </ControlRow>
                <ControlRow>
                  <Radio name="choice" value="2" />
                  <BodyText>Radio option 2</BodyText>
                </ControlRow>
              </ControlGroup>

              <ControlRow>
                <Toggle />
                <BodyText>Toggle switch</BodyText>
              </ControlRow>
            </FormControls>
          </Card>

          <Card>
            <TitleText>Icons</TitleText>
            <IconGrid>
              <IconWrapper>
                <UserIcon size={24} />
                <LabelText>User</LabelText>
              </IconWrapper>
              <IconWrapper>
                <SearchIcon size={24} />
                <LabelText>Search</LabelText>
              </IconWrapper>
              <IconWrapper>
                <CalendarIcon size={24} />
                <LabelText>Calendar</LabelText>
              </IconWrapper>
              <IconWrapper>
                <SettingsIcon size={24} />
                <LabelText>Settings</LabelText>
              </IconWrapper>
              <IconWrapper>
                <HeartIcon size={24} />
                <LabelText>Heart</LabelText>
              </IconWrapper>
              <IconWrapper>
                <TicketIcon size={24} />
                <LabelText>Ticket</LabelText>
              </IconWrapper>
            </IconGrid>
          </Card>
        </ControlsSection>
      </Grid>
    </AppWrapper>
  )
}
