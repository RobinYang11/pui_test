import React from 'react';
import ReactDom from 'react-dom';
import '../static/iconfont';
import './index.less';
import { Modal } from '../components/index';

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
      <div>
        <button onClick={this.toggle}>tg</button>
        <Modal
          title="这是标题"
          onClose={() => { this.setState({ visible: false }) }}
          visible={this.state.visible}
        >
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
