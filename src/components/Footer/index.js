import React from 'react'

import styled from 'styled-components'

const FooterWrapper = styled.div`
  width: calc(100% - 324px);
  margin-top: -63px;
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 220px;
  padding: 20px;
  color: ${({ theme }) => theme.text1} !important;
  font-weight: 300;
  font-size: 12px;
  text-align: center;

  @media screen and (max-width: 1080px) {
    width: calc(100% - 40px);
    left: 0;
  }
`

const Footer = () => <FooterWrapper>Elephant.ac</FooterWrapper>

export default Footer
