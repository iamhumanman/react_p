import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
  const cls = [
    'MenuToggle',
    'material-icons'
  ]

  const cls2 = []

  if (props.isOpen) {
    cls2.push('clear')
    cls.push('open')
  } else {
    cls2.push('view_list')
  }

  return (
    <>
    {/* <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    /> */}
    <span 
      className={cls.join(' ')}
      onClick={props.onToggle}
    >{cls2.join(' ')}</span>
    </>
  )
}

export default MenuToggle