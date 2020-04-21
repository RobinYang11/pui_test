import React from 'react';
import ReactDom from 'react-dom';
import { Test, Container ,Row} from '../components/index';


const {Provider,Consumer}=React.createContext({})

ReactDom.render(
  <div>
    <Container type="b">
      <Test name="robin" age={33} />
    </Container>
    <Container>
      <Row>
        robin
      </Row>
    </Container>
  </div>,
  document.getElementById("reactApp")
);
