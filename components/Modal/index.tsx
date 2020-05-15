import React, { useState } from 'react';
import './style.less';
import Icon from '../Icon/index';
import { CSSTransition } from 'react-transition-group'

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
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';
  const [visible, setVisible] = useState(false);

  // if (!props.visible) {
  //   return null;
  // }

  return (
    <div className="robin-modal">
      {props.visible ? <div
        onClick={(e) => {
          // e.stopPropagation();
          props.onClose();
        }}
        className="mask"
      >
      </div> : ''}
      <CSSTransition
        in={props.visible}
        classNames="alert"
        timeout={300}
        unmountOnExit
        onEnter={() => {
          console.log("onEnter")
          // props.onClose()
        }}
        onExit={() => {
          console.log("onExit");
          props.onClose();
        }}
      >
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.stopPropagation();
              console.log("wrapper cli")
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
            {/* <span
              onClick={(e) => {
                props.onClose();
              }}
              className="close-btn">
              X
            </span> */}
            <div style={{ height: '200px', background: "white", padding: "10px", position: "relative" }}>
              <Icon
                style={{ position: 'absolute', right: '10px', fontSize: '1.5em'}}
                type="tishi"
                onClick={()=>{props.onClose(e)}}
              />
              <h4>{props.title}</h4>
              {
                props.children
              }
              <div style={{ position: 'absolute', bottom: "10px", right: "10px" }}>
                <button onClick={() => { props.onClose(); }} style={{ marginRight: "10px" }}>取消</button>
                <button>确定</button>
              </div>
            </div>

          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Modal;