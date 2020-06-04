import React, { useState, useEffect } from 'react';


interface IDropDownProps{
  visible:boolean;
  children?:any;
}

function DropDown(props:IDropDownProps){

  const [state,setState]=useState({
    visible:props.visible,
  })
  
  useEffect(()=>{
    setState({
      ...state,
      visible:props.visible,
    })
  },[props.visible])

  return(
    <div role="doucment">
      {
        props.visible ?
        <div>
          {
            props.children
          }
        </div> : null
      }
    </div>
  )
}

export default DropDown;