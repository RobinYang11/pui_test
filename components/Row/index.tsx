import React from 'react';



interface IRowProps {
  span:number,
  children:any
}

class Row extends React.Component<IRowProps,{}>{

  render(){
    return(<div className={`col-md-${this.props.span}`}>
      {this.props.children}
    </div>)
  }
}


function Row1(props:IRowProps){
  return(<div>
    {props.children}
  </div>)
}

export default Row;