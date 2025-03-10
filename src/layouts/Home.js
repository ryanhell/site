import React from 'react'

import { Box, Column } from 'serverless-design-system'
import { Header } from 'src/components'
import Footer from 'src/components/pages/home/Footer'

//TODO: frameworkPage prop === dirtyPattern - fix

const DefaultLayout = ({
  children,
  transparentHeader,
  frameworkPage,
  startWithWhiteHeader,
}) => {
  return (
    <Column width={1}>
      <Header
        transparent={transparentHeader}
        startWithWhiteHeader={startWithWhiteHeader ? true : false}
      />
      <Box width={1}>{children}</Box>
      <Footer noPrefooter={true} frameworkPage={frameworkPage} />
    </Column>
  )
}
export default DefaultLayout
