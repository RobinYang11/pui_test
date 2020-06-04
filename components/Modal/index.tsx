import React, { useState, useEffect, useRef } from 'react';
import './style.less';
import Icon from '../Icon/index';
import { CSSTransition } from 'react-transition-group'
import Button from '../Button/index';

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




function Modal(props: IModalProps) {

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

  function renderOperateButton() {

    if (props.isCloseButtonVisible === undefined
      || props.isCloseButtonVisible === true) {
      return (<React.Fragment>
        <span className="close-btn">
          {
            state.maximized ? <span onClick={() => {
              setState({
                ...state,
                visible: props.visible,
                maximized:false,
                style:{
                  width:minWidth,
                }
              });
            }}>
              <Icon
                style={{
                  color: '#BFBFBF'
                }}
                type="jianhao"
              />
            </span> :
              <span onClick={() => {
                setState({
                  ...state,
                  maximized:true,
                  style:{
                    width:maxWidth,
                  }
                });
              }}>
                <Icon
                  style={{
                    color: '#BFBFBF'
                  }}
                  type="jiahao"
                />
              </span>
          }
          <span
            onClick={() => {
              closeModal();
            }}
          >
            <Icon
              style={{
                color: '#ff5959'
              }}
              type="close"
            />
          </span>

        </span>
      </React.Fragment>);
    }
    return null;
  }

  /**
   * when modal show ,set body unscrollable!
   */
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';

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
          role="document" className="content-wrapper"
          >
          <div className="content"
            style={{
              width: props.width || minWidth,
              padding: "10px 0",
              ...props.style,
              ...state.style
            }}
          >
            <div className="modal-header">
              <h4>{props.title}</h4>
              {
                renderOperateButton()
              }
            </div>
            <div className="modal-body">
              {
                props.children
              }
            </div>
            <div className="modal-footer">
              {
                props.footer !== undefined ? props.footer : (
                  <React.Fragment>
                    <Button
                      type="default"
                      onClick={() => {
                        closeModal();
                      }}
                      style={{ marginRight: "10px" }}
                    >
                      {props.closeText || "cancel"}
                    </Button>
                    <Button type="primary">{props.sureText || "ok"}</Button>
                  </React.Fragment>
                )
              }
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Modal;