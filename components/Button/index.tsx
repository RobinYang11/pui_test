import React from 'react';
import "./style.less"

interface IButtonProps {
  /**
   * type  button style type 
   */
  type?: 'primary' | 'default' | 'danger',
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
      {...props}
      type="button"
    >
      {props.children}
    </button>
  )
}

export default Button;