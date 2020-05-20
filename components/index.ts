

export { default as Table } from './Table/Table';

export { default as ImageViewer } from './ImageViewer/index';

import Modal from './Modal/index';
import Button from './Button/index';
import Icon from './Icon/index';

const components = {
  Icon,
  Button,
  Modal
}

class Robin {

  static instance: Robin;

  components:Object;

  constructor(){
    this.components= components;
  }

  static getInstance() {
    if (!this.instance) {
      return new Robin();
    } else {
      this.instance;
    }
  }

}

export default Robin.getInstance();