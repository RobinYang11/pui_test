
import React from 'react';
import { render } from 'react-dom';

interface ITableProps{
  data:Array<object>,
  column:Array<{
    key:any,
    keyProperty:string,
  }>,
  size:number
}


function Table(props:ITableProps){

  const {data,column,size} = props;

  return(<div>
    <table>
      <thead>
        
      </thead>
    </table>
  </div>)
}