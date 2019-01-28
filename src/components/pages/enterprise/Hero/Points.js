import React from 'react'
import { Flex, Box, Button, Row } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

//TODO: map instead

const PointButton = ({ children }) => (
  <Button
    bg='#fd5750'
    width={['42px', '42px', '42px', '42px', '72px']}
    height={['42px', '42px', '42px', '42px', '72px']}
    fontSize={['18.7px', '18.7px', '18.7px', '18.7px', '32px']}
    letterSpacing={['-0.29px', '-0.29px', '-0.29px', '-0.29px', '-0.5px']}
    p={0}
  >
    {children}
  </Button>
)

const PointText = ({ children }) => (
  <Box width={[160, 160, 'auto']}>
    <Heading.h5
      color='white'
      ml={['16px', '16px', '14px', '14px', 32]}
      mt={[0, 0, 0, 0, 32]}
    >
      {children}
    </Heading.h5>
  </Box>
)

const Points = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent='space-between'
    mt={62}
    alignItems={['center', 'center', 'auto']}
  >
    <Row mb={[35, 35, 0]}>
      <PointButton>01</PointButton>
      <PointText>Infrastructure automation</PointText>
    </Row>

    <Row mb={[35, 35, 0]}>
      <PointButton>02</PointButton>
      <PointText>Local testing and debugging</PointText>
    </Row>

    <Row mb={[35, 35, 0]}>
      <PointButton>03</PointButton>
      <PointText>Application lifecycle management</PointText>
    </Row>
  </Flex>
)

export default Points
