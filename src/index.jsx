import React from 'react';
import ReactDom from 'react-dom';
import '../static/iconfont';
import './index.less';
import Robin from '../components/index';

const { Modal, Button } = Robin.components;
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
        <Button
          type="default"
          onClick={this.toggle}>
          open modal
        </Button>
        <Button onClick={() => {
          Modal.confirm({
            content: "are you sure?",
          });
        }} type="primary" >
          confirm
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
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("reactApp")
);
