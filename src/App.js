import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './themes';
import './App.css';
import Toggle from './Components/Toggle';
import Timer from './Components/Timer';
import { SocketProvider } from './services/contexts/context';


const StyledApp = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`



function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")

  }

  return (
    <ThemeProvider
      theme={theme === "light" ? lightTheme : darkTheme}
    >

      <GlobalStyle />
      <SocketProvider >
        <StyledApp>

          <Timer />

          <Toggle onToggle={
            () => themeToggler()
          } />
        </StyledApp>

      </SocketProvider>

    </ThemeProvider>
  );
}

export default App;
