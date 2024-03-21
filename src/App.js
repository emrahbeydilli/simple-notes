import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import SignInForm from './components/sign-in-form/sign-in-form.component';
import { Header } from "./routes/header/header.component";

function App() {
  const [currentUser,setCurrentUser] = useState();
  return (
    <main>
      {!currentUser ? (
        <SignInForm/>
      ) :(
        <Routes>
          <Route path='/' element={<Header/>}>

          </Route>
        </Routes>
      )

      }
    </main>
  );
}

export default App;
