import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import OneLogo from '../../assets/one.jpg'
import { useListedTokensMap } from '../../contexts/Application'

import E from '../../assets/ELEPHANT.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`

const StyledOneLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)
  const tokenMap = useListedTokensMap()

  useEffect(() => {
    setError(false)
  }, [address])

  if (!tokenMap || error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <span {...rest} style={{ fontSize: size }} role="img" aria-label="face">
          🤔
        </span>
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a') {
    return (
      <StyledOneLogo size={size} {...rest}>
        <img
          src={OneLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledOneLogo>
    )
  }

  const path = tokenMap[address]?.logoURI

  return (
    <Inline>
      <Image
        {...rest}
        alt={'Elephant Dex & Casino Image'}
        src={path === 'https://elephant.ac/static/media/elephant-token-logo.f1dd854b.png' ? E : path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
