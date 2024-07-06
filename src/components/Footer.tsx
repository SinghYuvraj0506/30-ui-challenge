import React from 'react'
import OuterWrapper from './HOC/OuterWrapper';

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default <OuterWrapper children={<Footer />} />;