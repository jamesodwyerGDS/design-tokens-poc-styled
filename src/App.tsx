import React, { useEffect, useState } from 'react'
import './tokens/variables.ticketmaster.css'
import './tokens/index.css'
import './base.css'

import { Button } from './atoms/Button'
import { Card } from './atoms/Card'
import { DisplayText, TitleText, BodyText, LabelText } from './atoms/Text'

type Theme = 'ticketmaster' | 'livenation'

export default function App() {
  const [theme, setTheme] = useState<Theme>('ticketmaster')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'livenation') {
      import('./tokens/variables.livenation.css')
    }
  }, [theme])

  return (
    <div className="app">
      <header className="header">
        <h1>Token Studio → styled-components demo</h1>
        <div className="theme-switch">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
            <option value="ticketmaster">Ticketmaster</option>
            <option value="livenation">Live Nation</option>
          </select>
        </div>
      </header>

      <section className="grid">
        <Card>
          <TitleText>Buttons</TitleText>
          <div className="row">
            <Button>Primary</Button>
            <Button className="secondary">Secondary</Button>
          </div>
        </Card>

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
      </section>
    </div>
  )
}
