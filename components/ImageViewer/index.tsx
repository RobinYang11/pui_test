import React, { useState } from 'react';
import './style.less';
import Modal from '../Modal/index';

interface ImageViewerProps {
  images: Array<{
    img: string,
  }>,
  style: {}
}

function ImageViewer(props: ImageViewerProps) {

  const [state, setState] = useState({
    visible: false,
  });

  function scrollLeft() {

  }

  function scrollRight() {

  }

  function onPreview(item: any): void {
    setState({
      ...state,
      visible: true,
    })
  }

  function quitPreview(): void {
    setState({
      ...state,
      visible: false,
    })
  }

  function renderImages(images: Array<Object>) {
    return images.map((i: any) => {
      return <li onClick={() => { onPreview(i) }} key={i.img}>
        <img src={i.img} />
      </li>
    })
  }

  return (<div className="image-viewer" style={{ width: '300px', ...props.style }}>
    <button className="btn-left" >left</button>
    <ul style={{ overflow: 'hidden' }}>
      {
        renderImages(props.images)
      }
    </ul>
    <button className="btn-right">right</button>
    <Modal
      visible={state.visible}
      onClose={quitPreview}
      title="test">
      <div>弹框测试</div>
    </Modal>
  </div>)
}
export default ImageViewer;