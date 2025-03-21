import React from 'react'

import {
  Flex,
  Image,
  Position,
  Background,
  Relative,
  Absolute,
  Text,
} from 'serverless-design-system'
import TerminalBgImage from 'src/assets/images/pages/framework/terminal-graphics.svg'
import styled from 'styled-components'
import TerminalImage from 'src/assets/images/pages/framework/terminal-light.svg'

const TerminalBackground = styled(Relative)`
  @media screen and (max-width: 340px) {
    margin-left: -27px;
  }
  @media screen and (min-width: 370px) and (max-width: 380px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 410px) and (max-width: 420px) {
    margin-left: 2px;
    width: 350px;
  }
`

const TerminalText = styled(Absolute)`
  @media screen and (max-width: 340px) {
    margin-left: 24px;
  }
  @media screen and (min-width: 370px) and (max-width: 380px) {
    margin-left: 4px;
  }
  @media screen and (min-width: 410px) and (max-width: 420px) {
    margin-left: -20px;
  }
`

const TerminalTextContent = styled(Text.p)`
  @media screen and (min-width: 410px) and (max-width: 420px) {
    font-size: 11px;
  }
`

const StyledPosition = styled(Position)`
  @media screen and (min-width: 1920px) {
    position: relative;
    left: 0;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (min-width: 1920px) {
    margin-top: 31%;
  }
`

const BackgroundWithBigScreenCoverage = styled(Background)`
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    width: 530px;
  }

  @media screen and (min-width: 1920px) {
    width: 826px;
  }

  @media screen and (min-width: 1920px) {
    width: 600px;
  }
`

const GrayText = ({ children }) => (
  <Text.span
    color='#9b9b9b'
    fontSize={['8.6px', '8.6px', '10.6px', '14px']}
    lineHeight={['13.5px', '13.5px', '12.5px', '12.5px', '22px']}
    letterSpacing={['0.09px', '0.09px', '0.08px', '0.08px', '0.15px']}
  >
    {children}
    <br />
  </Text.span>
)
const BlackText = ({ children }) => (
  <Text.span color='#000000' fontSize={['8.6px', '8.6px', '10.6px', '14px']}>
    {children}
    <br />
    <br />{' '}
  </Text.span>
)

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 0, 0, '55%']}
    mt={[0, 0, 48]}
  >
    <StyledPosition
      zIndex='5'
      left={[null, null, 0, '28px', '78px']}
      position={['relative', 'relative', 'absolute']}
    >
      <BackgroundWithBigScreenCoverage
        width={['325px', '325px', '353px', '458px', '580px', '720px']}
        height={['337px', '337px', '462px', '472px', '580px', '687px']}
        backgroundImage={`url(${TerminalBgImage})`}
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
      >
        <Flex flexDirection='column' alignItems='center'>
          <StyledFlex
            flexDirection='column'
            alignItems='center'
            mt={['10%', '10%', '20%']}
            ml={['-10px']}
          >
            <TerminalBackground width={['280px', '320px', 1, 1, '488px']}>
              <Image src={TerminalImage} />
            </TerminalBackground>
            <TerminalText
              mt={['37px', '37px', '22px', '52px', '52px']}
              ml={['-20px', '-20px', '-20px']}
            >
              <TerminalTextContent
                color='#727679'
                fontSize={['10px', '10px', '13.7px']}
                letterSpacing='0.1px'
              >
                <GrayText># Step 1. Install serverless globally</GrayText>
                <BlackText>$ npm install serverless -g</BlackText>
                <GrayText># Step 2. Create a service</GrayText>
                <BlackText>$ serverless</BlackText>
                <GrayText># Step 3. deploy to cloud provider</GrayText>
                <BlackText>$ serverless deploy</BlackText>
                <GrayText># Your function is deployed!</GrayText>
                <BlackText>$ http://xyz.amazonaws.com/hello-world</BlackText>
              </TerminalTextContent>
            </TerminalText>
          </StyledFlex>
        </Flex>
      </BackgroundWithBigScreenCoverage>
    </StyledPosition>
  </Flex>
)

export default HomeHeroImage
