import React from 'react'

import { Motion, spring } from 'react-motion';
// In your render...


class AnimationDemo extends React.Component<{}, {}>{

  render() {
    return (
      <div>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>
    )
  }
}



// function AnimationDemo(props){
//   return (<div>
//     demo
//   </div>)
// }

export default AnimationDemo;