import React from 'react'
import Styled from 'styled-components'
import './styles.css'

import Button from 'react-og-buttons'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,700']
  }
})

const Grid = Styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 24px;
    }

    padding: 1rem;
`

const App = () => {
  return (
    <Grid>
      <Button>OG Button</Button>
      <Button backgroundColor='#2196f3' color='#fafafa'>
        Edit Button
      </Button>
      <Button typeStyle='success'>Success Button</Button>
      <Button typeStyle='outline'>Outline Button</Button>
      <Button typeStyle='warning'>Warning Button</Button>
      <Button typeStyle='danger'>Danger Button</Button>
    </Grid>
  )
}

export default App
