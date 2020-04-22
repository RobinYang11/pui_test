
import React from 'react';

interface ITableProps {
  data: Array<object>,
  column: Array<IColumn>,
  size: number
}

interface IColumn {
  key: any,
  keyProperty: string,
  title: string,
  render: React.ReactElement
}


function renderHeader(col: Array<object>): Array<React.ReactElement> {
  return col.map((i: IColumn) => {
    if (i.render) {
      return <th>{i.render}</th>
    }
    return (<th key={i.key}>{i.title}</th>)
  })
}

function Table(props: ITableProps) {
  const { data, column, size } = props;
  return (<table>
    <thead>
      <tr>
        {renderHeader(column)}
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>)
}

export default Table;