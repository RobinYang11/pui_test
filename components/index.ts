import Modal from './Modal/index';
import Button from './Button/index';
import Icon from './Icon/index';

const components = {
  Modal,
  Icon,
  Button,

}

class Robin {

  static instance: Robin;
  components: Object;
  
  constructor() {
    this.components = components;
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