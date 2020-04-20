

import React from 'react';
import ReactDom from 'react-dom';
import {Test} from '../components/index'

ReactDom.render(<div>
<Test name="robin" age={33} />
</div>,document.getElementById("reactApp"));
