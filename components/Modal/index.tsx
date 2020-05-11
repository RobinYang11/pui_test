import React, { useState } from 'react';
import './style.less';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface IModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactElement;
  onClose?: () => void;
  onSure?: () => void;
  width?: string;
  style?: object;
}

function Modal(props: IModalProps) {
  /**
   * when modal show ,set body unscrollable!
   */
  // document.body.style.overflow = props.visible ? 'hidden' : 'auto';
  const [visible, setVisible] = useState(false);
  
  // if (!props.visible) {
  //   return null;
  // }

  return ( 
    <CSSTransition
      in={props.visible}
      classNames="alert"
      timeout={300}
      unmountOnExit
      onEnter={() => {
        console.log("onEnter")
        // props.onClose()
      }}
      
      onExit={()=>{
        console.log("onExit");
        props.onClose();
      }}
    >
      <div className="robin-modal">
        <div
          onClick={(e) => {
            // e.stopPropagation();
            props.onClose();
          }}
          className="mask"></div>
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.stopPropagation();
              props.onClose();
            }
          }}

          role="document" className="content-wrapper">
          <div className="content"
            style={{
              width: props.width || "400px",
              ...props.style,
            }}
          >
            <span
              onClick={(e) => {
                props.onClose();
              }}
              className="close-btn">
              X
            </span>
            {
              props.children
            }
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal;