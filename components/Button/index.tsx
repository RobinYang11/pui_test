import React from 'react';
import "./style.less"

interface IButtonProps {
  /**
   * type  button style type 
   */
  type?: String,
  /**
   * custom style
   */
  style?: object,

  onClick?: () => void;

  children: React.ReactChild | React.ReactChildren | React.ReactElement;
}


function Button(props: IButtonProps) {

  return (
    <button
      className={`btn btn-${props.type}`}
      style={props.style}
      onClick={() => { props.onClick() }}
    >
      {props.children}
    </button>
  )
}

export default Button;