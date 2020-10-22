import Styled, { css } from 'styled-components'

const defaultStyle = css``
const successStyle = css`
  background-color: #4caf50;
  color: #fafafa;
`

const warningStyle = css`
  border: 2px solid #ffc107;
  background-color: #fafafa;
  color: #ffc107;

  &:hover {
    filter: brightness(100%);
    background-color: #ffc107;
    color: #fafafa;
  }
`
const dangerStyle = css`
  border: 2px solid #f44336;
  background-color: #fafafa;
  color: #f44336;

  &:hover {
    filter: brightness(100%);
    background-color: #f44336;
    color: #fafafa;
  }
`
const outlineStyle = css`
  border: 2px solid
    ${(props: Props) => (props.color ? props.color : 'var(--primary-color)')};

  background-color: ${(props: Props) =>
    props.backgroundColor || 'var(--secundary-color)'};

  color: ${(props: Props) =>
    props.color ? props.color : 'var(--primary-color)'};

  &:hover {
    filter: brightness(100%);

    background-color: ${(props: Props) =>
      props.color ? props.color : 'var(--primary-color)'};

    color: ${(props: Props) =>
      props.color ? props.color : 'var(--secundary-color)'};
  }
`

interface Props {
  typeStyle?: string
  color?: string
  backgroundColor?: string
  fontSize?: string
  fontFamily?: string
}

const Index = Styled.button`
  border: 0;

  &:hover {
    filter: brightness(120%);
  }

  color: ${(props: Props) => props.color || 'var(--secundary-color)'};
  background-color: ${(props: Props) =>
    props.backgroundColor || 'var(--primary-color)'};

  ${(props: Props) => {
    switch (props.typeStyle) {
      case 'success':
        return successStyle

      case 'warning':
        return warningStyle

      case 'danger':
        return dangerStyle

      case 'outline':
        return outlineStyle

      default:
        return defaultStyle
    }
  }}

  height: 50px;
  padding: 0 15px;

  border-radius: 32px;

  cursor: pointer;

  box-shadow: 0px 4px 10px -4px rgba(0,0,0,0.75);

  font-size: ${(props: Props) => props.fontSize || '24px'};
  font-family: ${(props: Props) => props.fontFamily || 'var(--title-font)'};

  transition: 0.1s;

  & svg {
    margin-right: 5px;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
  }

`
export default Index
