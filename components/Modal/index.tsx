import React, { useState, useEffect } from 'react';
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
}

function BaseModal(props: IModalProps) {

  const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  function closeModal() {

    if (props.onClose) {
      props.onClose();
    } else {
      setVisible(false);
    }

  }

  function renderCloseButton() {
    if (props.isCloseButtonVisible === undefined ||
      props.isCloseButtonVisible === true) {
      return (<span
        onClick={() => {
          closeModal();
        }}
        className="close-btn"
      >
        <Icon
          type="tishi"
        />
      </span>);
    }
    return null;
  }

  /**
   * when modal show ,set body unscrollable!
   */
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';

  return (
    <div className="modal">
      {visible ? <div
        onClick={(e) => {
          closeModal();
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
              width: props.width || "500px",
              padding: "10px 0",
              ...props.style,
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

const modalDom = props => (
  <div>
    <div className="modal-header">
      <h4>{props.title}</h4>
      {
        props.renderCloseButton()
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
                props.closeModal();
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
)


function Modal(props: IModalProps) {

  const [visible, setVisible] = useState(props.visible);
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  function closeModal() {

    if (props.onClose) {
      props.onClose();
    } else {
      setVisible(false);
    }

  }

  function renderCloseButton() {
    if (props.isCloseButtonVisible === undefined ||
      props.isCloseButtonVisible === true) {
      return (<span
        onClick={() => {
          closeModal();
        }}
        className="close-btn"
      >
        <Icon
          type="tishi"
        />
      </span>);
    }
    return null;
  }

  /**
   * when modal show ,set body unscrollable!
   */
  document.body.style.overflow = props.visible ? 'hidden' : 'auto';

  return (
    <div className="modal">
      {visible ? <div
        onClick={(e) => {
          closeModal();
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
              width: props.width || "500px",
              padding: "10px 0",
              ...props.style,
            }}
          >
            <div className="modal-header">
              <h4>{props.title}</h4>
              {
                renderCloseButton()
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

/**
 * confirm render a Modal on dynamic dom node.
 * when confirm closed,the node will be removed automatically.
 */
interface IconfirmProps extends IModalProps {
  content?: React.ReactChild | React.ReactChildren | React.ReactElement | string;
}

// Modal.confirm = function (params: IconfirmProps) {
//   const tempDiv = document.createElement('div')
//   document.body.appendChild(tempDiv);
//   ReactDOM.render(
//     <Modal
//       {...params}
//       rootDom={tempDiv}
//       visible={params.visible === undefined ? true : params.visible}
//     >
//       {params.content}
//     </Modal>, tempDiv);
// }

export default Modal;