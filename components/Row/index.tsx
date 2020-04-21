import React from 'react';
import './style.css';

interface IRowProps {
  span:number,
  children:any,
  style:{},
}

// class Row extends React.Component<IRowProps,{}>{
//   render(){
//     return(<div className={`col-md-${this.props.span}} {...this.props.style}>
//       {this.props.children}
//     </div>)
//   }
// }
function Row(props:IRowProps){
  return(<div className={`col-md-${props.span}`} {...props.style}> 
    {props.children}
    <div className="robin">
      god bless you!
    </div>
  </div>)
}

export default Row;