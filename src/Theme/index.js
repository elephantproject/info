import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkModeManager } from '../contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager()

  return <StyledComponentsThemeProvider theme={theme(darkMode)}>{children}</StyledComponentsThemeProvider>
}

const theme = (darkMode, color) => ({
  customColor: color,
  textColor: darkMode ? color : 'black',

  panelColor: darkMode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)',
  backgroundColor: darkMode ? '#212429' : '#F7F8FA',

  uniswapPink: darkMode ? '#fc8403' : 'black',

  concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
  inputBackground: darkMode ? '#1F1F1F' : '#FAFAFA',
  shadowColor: darkMode ? '#000' : '#FFF',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',

  text1: darkMode ? '#FFFFFF' : '#000000',
  text2: darkMode ? '#C3C5CB' : '#565A69',
  text3: darkMode ? '#6C7284' : '#888D9B',
  text4: darkMode ? '#565A69' : '#C3C5CB',
  text5: darkMode ? '#2C2F36' : '#EDEEF2',
  text6: darkMode ? '#000000' : '#000000',

  // special case text types
  white: '#FFFFFF',

  // backgrounds / greys
  bg1: darkMode ? '#000000' : '#FFFFFF',
  bg2: darkMode ? '#2C2F36' : '#F7F8FA',
  bg3: darkMode ? '#40444F' : '#EDEEF2',
  bg4: darkMode ? '#565A69' : '#CED0D9',
  bg5: darkMode ? '#b7b7b7' : '#888D9B',
  bg6: darkMode ? '#FFFFFF' : '#EDEEF2',

  //specialty colors
  modalBG: darkMode ? 'rgba(0,0,0,42.5)' : 'rgba(0,0,0,0.3)',
  advancedBG: darkMode ? 'rgb(0,0,0)' : 'rgb(255,255,255)',
  onlyLight: darkMode ? '#22242a' : 'transparent',
  divider: darkMode ? 'rgba(43, 43, 43, 0.435)' : 'rgba(43, 43, 43, 0.035)',

  //primary colors
  primary1: darkMode ? '#2172E5' : '#ff007a',
  primary2: darkMode ? '#3680E7' : '#FF8CC3',
  primary3: darkMode ? '#4D8FEA' : '#FF99C9',
  primary4: darkMode ? '#376bad70' : '#F6DDE8',
  primary5: darkMode ? '#153d6f70' : '#FDEAF1',

  // color text
  primaryText1: darkMode ? '#6da8ff' : '#ff007a',

  // secondary colors
  secondary1: darkMode ? '#2172E5' : '#ff007a',
  secondary2: darkMode ? '#17000b26' : '#F6DDE8',
  secondary3: darkMode ? '#17000b26' : '#FDEAF1',

  shadow1: darkMode ? '#000' : '#2F80ED',

  // other
  link: darkMode ? '#FFFFFF' : '#000000',
  red1: '#FF6871',
  red2: '#F82D3A',
  red3: '#D60000',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  blue1: darkMode ? '#FFFFFF' : '#000000',

  background: darkMode ? 'black' : `radial-gradient(50% 50% at 50% 50%, #ff007a30 0%, #fff 0%)`,
})

const TextWrapper = styled(Text)`
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
  font-size: 14px;
`

const TextWrapperLight = styled(Text)`
  color: ${({ theme }) => theme.text3};
`

export const TYPE = {
  main(props) {
    return <TextWrapper fontWeight={500} fontSize={14} style={{ color: theme.text1 }} {...props} />
  },

  body(props) {
    return <TextWrapper fontWeight={400} fontSize={14} style={{ color: theme.text1 }} {...props} />
  },

  small(props) {
    return <TextWrapper fontWeight={500} fontSize={11} style={{ color: theme.text1 }} {...props} />
  },

  header(props) {
    return <TextWrapper fontWeight={600} style={{ color: theme.text1 }} {...props} />
  },

  largeHeader(props) {
    return <TextWrapper fontWeight={500} style={{ color: theme.text1 }} fontSize={24} {...props} />
  },

  light(props) {
    return <TextWrapperLight fontWeight={400} fontSize={14} {...props} />
  },

  pink(props) {
    return <TextWrapper fontWeight={props.faded ? 400 : 600} style={{ color: theme.text1 }} {...props} />
  },
}

export const Hover = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  // background: ${({ theme }) => theme.bg1};
  // background: ${({ background }) => background};
  transform: translateY(-110vh);
`

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;    
    background-color: ${({ theme }) => theme.bg6};
    font-family: 'Comfortaa', sans-serif;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }

  button,
  input {
    font-family: 'Comfortaa', sans-serif;
  }

  
.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: ${({ theme }) => theme.text1};
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;
  

  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`
