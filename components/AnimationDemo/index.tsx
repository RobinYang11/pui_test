import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.less'
// In your render...


class AnimationDemo extends React.Component<{}, {}>{


  state = {
    visible: false,
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.toggle();
        }}>toggle</button>
        <CSSTransition
          in={this.state.visible}
          classNames="alert"
          timeout={300}
          unmountOnExit
          onEnter={() => {
            this.setState({
              a: true,
            })
          }}
        >
          <div>godrobin</div>
        </CSSTransition>

        <CSSTransition
          in={this.state.visible}
          classNames="alert"
          timeout={300}
          unmountOnExit
          onEnter={() => {
            this.setState({
              a: true,
            })
          }}
        >
          <div style={{
            background: "grey",
            height: "300px"
          }}>
            test
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default AnimationDemo;
