import React from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../../../../store/actions/sideMenu'

const Home = ({toggleMenu}) => (
  <div>
    <h1>Home Page</h1>
    <div>
      <button onClick={toggleMenu}>test redux</button>
    </div>
  </div>
)


export default connect(null, {toggleMenu})(Home);