import { Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react';

import './App.css';

import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from "./components/sign-up-form/sign-up-form.component";

function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <main>
      <Routes>
        <Route path='/' element={<Header currentUser={currentUser}/>} >
          {
            !currentUser ? (
              <Fragment>
                <Route index element={<SignInForm />} />
                <Route path='/signup' element={<SignUpForm />} />
              </Fragment>
            ) : (
              <Route index element={<Home />} />
            )
          }
        </Route>
      </Routes>
    </main>
  );
}

export default App;
