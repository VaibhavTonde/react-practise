import React from 'react';
import './style.css';
import { Counter } from './components/useState/Counter';
import UpdatingObject from './components/useState/UpdatingObject';
import UpdatingArray from './components/useState/UpdatingArray';
import UpdateTitle from './components/useEffect/UpdateTitle';

export default function App() {
  return (
    <div className="container">
      {/*  <Counter />
      <br />
      <UpdatingObject />
      <UpdatingArray /> */}
      <UpdateTitle />
    </div>
  );
}
