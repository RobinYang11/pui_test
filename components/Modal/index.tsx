import React, { useState } from 'react';
import './style.less';
import Icon from '../Icon/index';
import { CSSTransition } from 'react-transition-group'
import Button from '../Button/index';

interface IModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactElement;
  footer?: React.ReactChild | React.ReactChildren | React.ReactElement;
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

  return (
    <div className="modal">
      {props.visible ? <div
        onClick={(e) => {
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
        }}
        onExit={() => {
          props.onClose();
        }}
      >
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
              padding: "10px 10px 10px 10px",
              ...props.style,
            }}
          >
            <div className="modal-header">
              <h4>{props.title}</h4>
              <span
                onClick={() => {
                  props.onClose();
                }}
                className="close-btn"
              >
                <Icon
                  type="tishi"
                />
              </span>
            </div>
            {
              props.children
            }
            <div className="modal-footer">
              {
                props.footer ? props.footer : (
                  <React.Fragment>
                    <Button
                      type="default"
                      onClick={() => { props.onClose(); }}
                      style={{ marginRight: "10px" }}
                    >
                      取消
                      </Button>
                    <Button type="default">确定</Button>
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