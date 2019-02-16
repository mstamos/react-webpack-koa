import React from 'react';
import ReactDom from 'react-dom';

const Test = () => <h1>Test Foo</h1>;

ReactDom.render(<Test />, document.getElementById('app'));
