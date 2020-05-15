import React from 'react';
import './style.less';

interface IconProps {
  type: string;
  style: object;

}

function Icon(props: IconProps) {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      // onClick={()=>{props.onClick();}}
      {...props} 
    >
      <use xlinkHref={`#icon-${props.type}`}></use>
    </svg>
  )
}

export default Icon;