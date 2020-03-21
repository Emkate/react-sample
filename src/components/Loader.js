import React from 'react';
import { Loading } from 'carbon-components-react'

function Loader() {
  return (
    <div className="loader-wrapper">
      <Loading active
        small={false}
        withOverlay={false}></Loading>
    </div>
  )
}

export default Loader;