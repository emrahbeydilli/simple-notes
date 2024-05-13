import { Route, Routes } from 'react-router-dom';
import { Fragment, useEffect, useMemo, useState } from 'react';

import './App.css';

import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";
import SignInForm from './components/sign-in-form/sign-in-form.component';
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import { UserContext } from "./utils/userContext";
import { onAuthStateChangedListener } from './utils/firebase.utils';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const unSub = onAuthStateChangedListener((user) => {
      if (!user) setUser(null);
    });
    return () => unSub();
  }, []);

  return (
    <main>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<Header/>} >
            {
              !user ? (
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
      </UserContext.Provider>
    </main>
  );
}

export default App;
