import React, { useEffect, useState } from 'react'
import './fonts.css'
import './base.css'

import { Button } from './atoms/Button'
import { Card } from './atoms/Card'
import { DisplayText, TitleText, BodyText, LabelText } from './atoms/Text'
import { Checkbox } from './atoms/Checkbox'
import { Radio } from './atoms/Radio'
import { Toggle } from './atoms/Toggle'

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
          <label htmlFor="theme">Theme:</label>
          <select 
            id="theme" 
            value={theme} 
            onChange={(e) => setTheme(e.target.value as Theme)}
            style={{
              backgroundColor: theme === 'livenation' ? 'var(--brand-color-brand-primary)' : 'var(--brand-color-brand-primary)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              border: 'none'
            }}
          >
            <option value="ticketmaster">Ticketmaster</option>
            <option value="livenation">Live Nation</option>
          </select>
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
        </div>
      </section>
    </div>
  )
}
