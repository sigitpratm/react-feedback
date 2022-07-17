import React from 'react'
import PropTypes from 'prop-types'

function Header({ title, bgColor, textColor }) {

  const headerStyle = {
    background: bgColor,
    color: textColor,
  }

  return (
    <header style={ headerStyle }>
      <div className='container'>
        <h2>{ title }</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header