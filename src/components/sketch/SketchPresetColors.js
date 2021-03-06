import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import { plus } from 'react-icons-kit/fa/plus'
import Icon from 'react-icons-kit'

import { Swatch } from '../common'

export const SketchPresetColors = ({ colors, addNewColorToPreset = () => {}, onClick = () => {}, onSwatchHover }) => {
  const styles = reactCSS({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0',
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      },
      plusButton: {
        background: 'none',
        border: 0,
        shadow: 0,
        cursor: 'pointer',
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  })

  const handleClick = (hex, e) => {
    onClick({
      hex,
      source: 'hex',
    }, e)
  }

  return (
    <div style={ styles.colors } className="flexbox-fix">
      { colors.map((colorObjOrString) => {
        const c = typeof colorObjOrString === 'string'
          ? { color: colorObjOrString }
          : colorObjOrString
        const key = `${ c.color } ${ c.title || '' }`
        return (
          <div key={ key } style={ styles.swatchWrap }>
            <Swatch
              { ...c }
              style={ styles.swatch }
              onClick={ handleClick }
              onHover={ onSwatchHover }
              focusStyle={{
                boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${ c.color }`,
              }}
            />
          </div>
        )
      }) }
      <div
        style={ styles.plusButton }
        onClick={ addNewColorToPreset }
      >
        <Icon
          style={{
            position: 'relative', top: '-1px',
          }}
          icon={ plus } size="15px"
        />
      </div>
    </div>
  )
}

SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
    })],
  )).isRequired,
}

export default SketchPresetColors
