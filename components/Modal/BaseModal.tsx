
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'



interface IModalProps {
  visible?: boolean;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactElement;
  footer?: React.ReactChild | React.ReactChildren | React.ReactElement;
  onClose?: () => void;
  onSure?: () => void;
  width?: string;
  style?: object;
  isCloseButtonVisible?: boolean;
  sureText?: string;
  closeText?: string;
  // max width of modal
  maxWidth?: string;
  // min width of modal
  minWidth?: string;
  // there are two kinds of modal : 'default' and 'customized'
  type?: 'default' | 'customized';
}

function BaseModal(props:IModalProps){
  
  const maxWidth = '1200px';
  const minWidth = '500px';

  const [state, setState] = useState({
    visible: props.visible,
    maximized: false,
    style: {},
  });


  useEffect(() => {
    setState({
      ...state,
      visible: props.visible,
    });
  }, [props.visible]);

  function closeModal() {
    if (props.onClose) {
      props.onClose();
    } else {
      setState({
        ...state,
        style:{
          width:minWidth,
        },
        visible: props.visible,
        maximized:false,
      });
    }
  }

  return (
    <div className="modal">
    {state.visible ? <div
      onClick={(e) => {
        closeModal();
      }}
      className="mask"
    >
    </div> : ''}
    <CSSTransition
      in={state.visible}
      classNames="alert"
      timeout={300}
      unmountOnExit
      onEnter={() => {
        console.log("onEnter")
      }}
      onExit={() => {
        closeModal();
      }}
    >
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.stopPropagation();
            closeModal();
          }
        }}
        role="document" className="content-wrapper">
        <div className="content"
          style={{
            width: props.width || minWidth,
            padding: "10px 0",
            ...props.style,
            ...state.style
          }}
        >
          {
            props.children
          }
        </div>
      </div>
    </CSSTransition>
  </div>
  )
}