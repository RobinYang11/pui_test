// import React from 'react';
// import renderDom from 'react-dom'
// import Button from './components/Button';

import {h} from 'preact';

import {Component,render} from 'preact';

function Test(){
  return <div>test</div>
}
render(<Test/>,document.getElementById("reactApp"))
