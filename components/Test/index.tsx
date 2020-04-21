import React from 'react';
import "./style.css"

interface ITestProps {
  name:string ;
  age:number;
}

interface ItestState{
  name:string,
  age:number,
}

class Test extends React.Component<ITestProps,ItestState>{
  render(){
    return(
      <div className="test">
        <h1 className="b">{this.props.name}</h1>
        <h3>{this.props.age} robin</h3>
        <button>hello robin!</button>
      </div>
    )
  }
}

export default Test;