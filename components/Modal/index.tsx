import React from 'react';
import './style.less'

interface IModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactElement;
  onClose?: () => void;
  onSure?: () => void;
  width?: string;
  style: object;
}

function Modal(props: IModalProps) {
  /**
   * when modal show ,set body unscrollable!
   */
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';

  if(!props.visible){
    return null;
  }

  return (<div className="robin-modal">
    <div className="mask"></div>
    <div className="content-wrapper">
      <div className="content"
        style={{
          width: props.width || "400px",
          ...props.style,
        }}
      >
        <span 
        onClick={props.onClose}
        className="close-btn">
          X
        </span>
        {
          props.children
        }
      </div>
    </div>
  </div>)
}

export default Modal;