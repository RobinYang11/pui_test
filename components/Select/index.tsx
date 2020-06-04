import React from 'react';


interface ISelectProps{
  children:React.ReactElement | React.ReactChildren
}

function Select(props:ISelectProps){

  return (
    <div className="select">
      <div>
        content
      </div>
      <div>
        list
      </div>
    </div>
  )
}

export default Select;