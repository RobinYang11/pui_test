import React, { useState, useEffect } from 'react';
import './style.less';
import Icon from '../Icon/index';
import { CSSTransition } from 'react-transition-group'
import Button from '../Button/index';
import * as ReactDOM from 'react-dom';

interface IModalProps {
  visible?: boolean;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactElement;
  footer?: React.ReactChild | React.ReactChildren | React.ReactElement;
  onClose?: () => void;
  onSure?: () => void;
  width?: string;
  style?: object;
}

function Modal(props: IModalProps) {

  const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible]);
  /**
   * when modal show ,set body unscrollable!
   */
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';
  return (
    <div className="modal">
      {visible ? <div
        onClick={(e) => {
          // props.onClose();
          setVisible(false)
        }}
        className="mask"
      >
      </div> : ''}
      <CSSTransition
        in={visible}
        classNames="alert"
        timeout={300}
        unmountOnExit
        onEnter={() => {
          console.log("onEnter")
        }}
        onExit={() => {
          // props.onClose();
          setVisible(false)
        }}
      >
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.stopPropagation();
              setVisible(false)
            }
          }}
          role="document" className="content-wrapper">
          <div className="content"
            style={{
              width: props.width || "500px",
              padding: "10px 0",
              ...props.style,
            }}
          >
            <div className="modal-header">
              <h4>{props.title}</h4>
              <span
                onClick={() => {
                  setVisible(false);
                }}
                className="close-btn"
              >
                <Icon
                  type="tishi"
                />
              </span>
            </div>
            <div className="modal-body">
              {
                props.children
              }
            </div>
            <div className="modal-footer">
              {
                props.footer ? props.footer : (
                  <React.Fragment>
                    <Button
                      type="default"
                      onClick={() => { setVisible(false) }}
                      style={{ marginRight: "10px" }}
                    >
                      取消
                      </Button>
                    <Button type="primary">确定</Button>
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

interface IConfirmProps {

}

Modal.confirm = function () {
  console.log("robin")
  const tempDiv = document.createElement('div')
  document.body.appendChild(tempDiv);
  ReactDOM.render(<Modal visible={true}
    style={{
      minHeight: "200px",
      background: "white",
    }} >hello</Modal>, tempDiv);
}




export default Modal;