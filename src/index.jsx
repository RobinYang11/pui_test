import React from 'react';
import ReactDom from 'react-dom';
import '../static/iconfont';
import { Table, ImageViewer, Modal, Icon, AnimationDemo } from '../components/index';

const { Provider, Consumer } = React.createContext({});

class App extends React.Component {

  state = {
    visible: false,
    data: [
      {
        img: 'http://image.biaobaiju.com/uploads/20180802/03/1533152912-BmPIzdDxuT.jpg',
        title: "小黄鸡",
      },
      {
        img: 'http://cdn.duitang.com/uploads/item/201508/01/20150801174202_UMnB8.jpeg',
        title: "小黄鸡",
      },
      {
        img: 'http://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/267f9e2f07082838685c484ab999a9014c08f11f.jpg',
        title: "小黄鸡",
      }, {
        img: 'http://image.biaobaiju.com/uploads/20180918/15/1537256147-APZCeYtgDH.jpg',
        title: "小黄鸡",
      }
    ]
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>tg</button>
        <Modal
          onClose={() => { this.setState({ visible: false }) }}
          visible={this.state.visible}>
          <div style={{ height: '200px', background: "red" }}>
            robin
         </div>
        </Modal>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("reactApp")
);
