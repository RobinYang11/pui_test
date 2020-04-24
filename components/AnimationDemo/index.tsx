import React from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import './style.less'
// In your render...


class AnimationDemo extends React.Component<{}, {}>{

 
  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          classNames="fade"
          timeout={1000}
          appear={true}
        >
          <div style={{
            background:"grey"
          }}>
            test
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default AnimationDemo;