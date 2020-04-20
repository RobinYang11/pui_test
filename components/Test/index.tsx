import React from 'react';

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
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.age}</h3>
        <button>hello robin</button>
      </div>
    )
  }
}

export default Test;