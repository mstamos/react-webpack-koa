import React, {useEffect} from 'react';
import axios from './shared/axios';

async function fetchData() {
  const data = await axios('/api/foo');
  console.log(data);
}

const App = () => {
  useEffect(() => {
    fetchData();
    console.log('miltos');
  });
  return <h1>Simple React</h1>;
};

export default App;
