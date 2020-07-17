import React, { useState, useEffect, useRef } from 'react';

interface IDropDownProps {
  children?: any;
  content?: any;
  triggerEventType?: string;
}

function DropDown(props: IDropDownProps) {

  const [state, setState] = useState({
    visible: false
  });

  const triggerRef = useRef(null);


  useEffect(() => {

    const dom: HTMLSpanElement = triggerRef.current
    dom.addEventListener('click', () => {
      if (state.visible) {
        setState({
          visible: false,
        })
      }
    })
  }, [])

  return (
    <div role="doucment">
      <span
        ref={triggerRef}
        onClick={() => {
          setState({
            visible: !state.visible,
          })
        }}
      >
        {
          props.children
        }
      </span>
      {
        state.visible ?
          (
            <div onClick={e => { console.log(e.target); e.stopPropagation(); }} className="dropdown">
              {
                props.content
              }
            </div>
          ) : null
      }
    </div>
  )
}

export default DropDown;