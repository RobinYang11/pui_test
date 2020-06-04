import React from 'react';
import ReactDom from 'react-dom';
import '../static/iconfont';
import './index.less';
import '../static/iconfont.css'
import Robin from '../components/index';
import DropDown from '../components/DropDown/index';

const { Modal, Button,Window } = Robin.components;
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
        <span className="icon-close"></span>
        <Button
          type="default"
          onClick={this.toggle}>
          open modal
        </Button>
        <Modal
          title="这是标题"
          locale="zh"
          onClose={() => { this.setState({ visible: false }) }}
          visible={this.state.visible}
        >
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
          <h5>这是内容</h5>
        </Modal>
        <DropDown/>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("reactApp")
);
