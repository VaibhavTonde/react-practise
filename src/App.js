import React from 'react';
import './style.css';
import { Counter } from './components/useState/Counter';
import UpdatingObject from './components/useState/UpdatingObject';
import UpdatingArray from './components/useState/UpdatingArray';

export default function App() {
  return (
    <div class="container">
      {/*  <Counter />
      <br />
      <UpdatingObject /> */}
      <UpdatingArray />
    </div>
  );
}
