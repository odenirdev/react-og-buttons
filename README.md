# react-og-buttons

> Buttons make by OG Developer

[![NPM](https://img.shields.io/npm/v/react-og-buttons.svg)](https://www.npmjs.com/package/react-og-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-og-buttons

or

yarn add react-og-buttons
```

## Setup

```css
:root {
  --primary-color: #191919;
  --secundary-color: #fafafa;
  --title-font: Roboto;
}
```

## Usage

```tsx
import React, { Component } from 'react'

import Button from 'react-og-buttons'

class Example extends Component {
  render() {
    return (
      <>
        <Button>OG Button</Button>
        <Button backgroundColor='#2196f3' color='#fafafa'>
          Edit Button
        </Button>
        <Button typeStyle='success'>Success Button</Button>
        <Button typeStyle='outline'>Outline Button</Button>
        <Button typeStyle='warning'>Warning Button</Button>
        <Button typeStyle='danger'>Danger Button</Button>
      </>
    )
  }
}
```

## Options

    If not pass options, will get setup :root css

```jsx
typeStyle?: string
color?: string
backgroundColor?: string
fontSize?: string
fontFamily?: string
```

## License

MIT © [odenirdev](https://github.com/odenirdev)
