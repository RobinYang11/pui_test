import React from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'

// In your render...


class AnimationDemo extends React.Component<{}, {}>{


  increase =()=>{

    

  }
  render() {
    return (
      <div>
        <CSSTransition
          classNames="test"
          timeout={{ enter: 500, exit: 300 }}
        >
          <div>
            test
          </div>
        </CSSTransition>
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