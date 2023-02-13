import styled from 'styled-components'

import logo from '../../assets/logo.svg'

function App() {
  return (
    <AppWrapper className="App">
      <AppHeader className="App-header">
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
      <Square />
      <Square />
    </AppWrapper>
  )
}

const Square = () => {
  return <StyledButton className={'square'}>X</StyledButton>
}

export default App

const AppWrapper = styled.div`
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`

const StyledButton = styled.button`
  height: 100px;
  width: 100px;
  font-size: 70px;
  color: red;
`
