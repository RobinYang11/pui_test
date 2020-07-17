import React from 'react';
import ReactDom from 'react-dom';
import '../static/iconfont';
import './index.less';
import '../static/iconfont.css'
import Robin from '../components/index';
// import DropDown from '../components/DropDown/index';
import ErsaModal from 'ersa-modal';

const { Modal, Button, Window } = Robin.components;
const { Provider, Consumer } = React.createContext({});

class App extends React.Component {

  state = {
    visible: false,
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  hide = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <ErsaModal visible={this.state.visible} onCancel={() => { this.hide() }} >
          <div>
            <h3>this is ersa modal</h3>
            <div>
              test
            </div>
          </div>
        </ErsaModal>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("reactApp")
);
