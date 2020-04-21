
import React from 'react';
import "./style.css";

interface IContainerProps {
  type: String,
  children:any;
}

class Container extends React.Component<IContainerProps, {}>{

  render() {

    const { type } = this.props;
    return (<div className={type === '' ? '' : ''}>
      {this.props.children}
    </div>)
  }
}

// function Container(props:IContainerProps){
//   return(<div className={props.type === "b" ?'container':'container-fluid'}>
//     {props.children}
//   </div>)
// }



export default Container;