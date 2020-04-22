import React, { useState } from 'react';
import './style.less';

interface ImageViewerProps {
  images: Array<{
    img: string,
  }>,
  style:{}
}

function ImageViewer(props: ImageViewerProps) {

  function scrollLeft() {

  }

  function scrollRight() {

  }

  function renderImages(images) {
    return images.map((i: any) => {
      return <li key={i.img}>
        <img src={i.img} />
      </li>
    })
  }

  return (<div {...props.style}>
    <button >left</button>
    <ul className="image-viewer">
      {
        renderImages(props.images)
      }
    </ul>
    <button>right</button>
  </div>)
}
export default ImageViewer;