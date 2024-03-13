import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function Two(props) {
  const { data } = useContext(AppContext);
  return (
    <div style={{ backgroundColor: 'red', width: '650px' }}>
      <h1>Layer Two (Props) {props.data}</h1>
      <h1>Layer Two (UseContext) {data} </h1>
      
    </div>
  );
}

export default Two;
