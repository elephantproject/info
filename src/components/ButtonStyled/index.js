import React from 'react'
import { Button as RebassButton } from 'rebass/styled-components'
import styled from 'styled-components'
import { Plus, ChevronDown, ChevronUp } from 'react-feather'
import { darken, transparentize } from 'polished'
import { RowBetween } from '../Row'
import { StyledIcon } from '..'

const Base = styled(RebassButton)`
  padding: 8px 12px;
  font-size: 0.825rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  outline: none;
  border-bottom-right-radius: ${({ open }) => open && '0'};
  border-bottom-left-radius: ${({ open }) => open && '0'};
`

const BaseCustom = styled(RebassButton)`
  padding: 16px 12px;
  font-size: 0.825rem;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`

const Dull = styled(Base)`
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: black;
  height: 100%;
  font-weight: 400;
  &:hover,
  :focus {
    background-color: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.25);
  }
  &:focus {
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.25);
  }
`

export default function ButtonStyled({ children, ...rest }) {
  return <Base {...rest}>{children}</Base>
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonLight = styled(Base)`
  background-color: ${({ color, theme }) => (color ? transparentize(0.9, color) : theme.bg1)};
  color: ${({ color, theme }) => (color ? darken(0.1, color) : theme.text1)};
  border: 3px solid ${({ theme }) => theme.text1};
  padding: 17px 20px;
  font-size: 14px;
  font-weight: 500;

  min-width: fit-content;
  border-radius: 8px;
  white-space: nowrap;

  a {
    color: ${({ color, theme }) => (color ? darken(0.1, color) : theme.text1)};
  }

  :hover {
    background-color: ${({ color, theme }) => (color ? transparentize(0.9, color) : theme.bg6)};
    color: ${({ color, theme }) => (color ? darken(0.1, color) : theme.text6)};
    border: 3px solid ${({ theme }) => theme.text1};
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
    padding: 17px 15px;
    margin-right: 25px;
  }
`

const ButtonDropdownContent = styled.div`
  color: ${({ theme }) => theme.text1};

  :hover {
    color: ${({ theme }) => theme.text6};

    > div,
    > div > div {
      color: ${({ theme }) => theme.text6};
    }
  }
`

export function ButtonDropdown({ disabled = false, children, open, ...rest }) {
  return (
    <ButtonFaded {...rest} disabled={disabled} open={open}>
      <RowBetween>
        <ButtonDropdownContent style={{ display: 'flex', alignItems: 'center' }}>{children}</ButtonDropdownContent>
        {open ? (
          <StyledIcon>
            <ChevronUp size={24} />
          </StyledIcon>
        ) : (
          <StyledIcon>
            <ChevronDown size={24} />
          </StyledIcon>
        )}
      </RowBetween>
    </ButtonFaded>
  )
}

export const ButtonDark = styled(Base)`
  background-color: ${({ color, theme }) => (color ? color : theme.bg2)};
  color: ${({ theme }) => theme.text1};
  width: fit-content;
  border-radius: 8px;
  white-space: nowrap;

  :hover {
    background-color: ${({ color, theme }) => (color ? darken(0.1, color) : darken(0.1, theme.bg6))};
  }
`

export const ButtonFaded = styled(Base)`
  background-color: ${({ theme, open }) => (open ? theme.bg6 : theme.bg1)};
  color: ${({ theme, open }) => (open ? theme.text6 : theme.text1)};
  border: 3px solid ${({ theme }) => theme.text1};
  white-space: nowrap;
  > div > div > div > div {
    ${({ theme, open }) => open && `color: ${theme.text6};`}
  }

  :hover {
    background-color: ${({ theme }) => theme.bg6};
    color: ${({ theme }) => theme.text6};
    > div {
      color: ${({ theme }) => theme.text6};
    }
  }
`

export function ButtonPlusDull({ disabled, children, ...rest }) {
  return (
    <Dull {...rest}>
      <ContentWrapper>
        <Plus size={16} />
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
      </ContentWrapper>
    </Dull>
  )
}

export function ButtonCustom({ children, bgColor, color, ...rest }) {
  return (
    <BaseCustom bg={bgColor} color={color} {...rest}>
      {children}
    </BaseCustom>
  )
}

export const OptionButton = styled.div`
  font-weight: ${({ active, darkMode }) => (active || !darkMode ? '600' : '500')};
  width: fit-content;
  white-space: nowrap;
  padding: 6px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.bg6};
  background-color: ${({ active, theme }) => active ? theme.bg6 : theme.bg1};
  color: ${({ theme, active }) => (active ? theme.text6 : theme.text1)};

  > div {
    color: ${({ theme, active }) => (active ? theme.text6 : theme.text1)};
    font-weight: ${({ active, darkMode }) => (active || !darkMode ? '600' : '500')};
  }

  :hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
  }
`
