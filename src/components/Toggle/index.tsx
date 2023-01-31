import React from 'react'
import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'

const IconWrapper = styled.div<{ isActive?: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 0.8 : 0.4)};

  :hover {
    opacity: 1;
  }
`

const StyledToggle = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text1};

  :hover {
    text-decoration: none;
  }
`

export interface ToggleProps {
  isActive: boolean
  toggle: () => void
}

export default function Toggle({ isActive, toggle }: ToggleProps) {
  return (
    <StyledToggle onClick={toggle}>
      <span>
        {isActive ? (
          <IconWrapper isActive={true}>
            <Sun size={20} />
          </IconWrapper>
        ) : (
          <IconWrapper isActive={true}>
            <Moon size={20} />
          </IconWrapper>
        )}
      </span>
    </StyledToggle>
  )
}
