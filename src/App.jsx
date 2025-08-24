import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import {NavBar} from './components/NavBar'
import './components/CartWidget'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="Un string mas" />
    </>
  );
}

export default App
