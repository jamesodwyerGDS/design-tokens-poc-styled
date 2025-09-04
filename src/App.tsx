import React, { useEffect, useState } from 'react'
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

type Theme = 'ticketmaster' | 'livenation'

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
    link.href = theme === 'livenation'
      ? '/css/_variables-livenation.css'
      : '/css/_variables-ticketmaster.css'
    document.head.appendChild(link)
  }, [theme])

  return (
    <div className="app">
      <header className="header">
        <h1>GDS & Token Studio → styled-components demo</h1>
        <div className="theme-switch">
          <ThemeToggle
            currentTheme={theme}
            onThemeChange={setTheme}
          />
        </div>
      </header>

      <section className="grid">
        <div className="typography-section">
          <Card>
            <TitleText>Typography</TitleText>
            <DisplayText>Display: Big headline to demo scale</DisplayText>
            <BodyText>Body: This paragraph uses semantic tokens for font-size, weight and line-height.</BodyText>
            <LabelText>Label: Helper text or microcopy.</LabelText>
          </Card>

          <Card>
            <TitleText>Surfaces & Elevation</TitleText>
            <div className="surface elevation-1">Elevation 1</div>
            <div className="surface elevation-2">Elevation 2</div>
            <div className="surface elevation-3">Elevation 3</div>
            <div className="surface elevation-4">Elevation 4</div>
          </Card>
        </div>

        <div className="controls-section">
          <Card>
            <TitleText>Buttons</TitleText>
            <div className="row">
              <Button>Primary</Button>
              <Button className="secondary">Secondary</Button>
            </div>
          </Card>

          <Card>
            <TitleText>Form Controls</TitleText>
            <div className="form-controls">
              <label className="control-row">
                <Checkbox />
                <span>Checkbox option</span>
              </label>

              <div className="control-group">
                <label className="control-row">
                  <Radio name="choice" value="1" />
                  <span>Radio option 1</span>
                </label>
                <label className="control-row">
                  <Radio name="choice" value="2" />
                  <span>Radio option 2</span>
                </label>
              </div>

              <label className="control-row">
                <Toggle />
                <span>Toggle switch</span>
              </label>
            </div>
          </Card>

          <Card>
            <TitleText>Spacing scale</TitleText>
            <div className="spacer-demo">
              <div className="box s-1">xs</div>
              <div className="box s-2">sm</div>
              <div className="box s-3">md</div>
              <div className="box s-4">lg</div>
              <div className="box s-5">xl</div>
            </div>
          </Card>

          <Card>
            <TitleText>Icons</TitleText>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--core-space-4)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <UserIcon size={24} />
                <LabelText>User</LabelText>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <SearchIcon size={24} />
                <LabelText>Search</LabelText>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <CalendarIcon size={24} />
                <LabelText>Calendar</LabelText>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <SettingsIcon size={24} />
                <LabelText>Settings</LabelText>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <HeartIcon size={24} />
                <LabelText>Heart</LabelText>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--core-space-2)' }}>
                <TicketIcon size={24} />
                <LabelText>Ticket</LabelText>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
