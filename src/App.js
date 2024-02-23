import './App.css';
import SignInForm from './components/sign-in-form/sign-in-form.component';

function App() {
  const currentUser =null;
  return (
    <main>
      {!currentUser ? (
        <SignInForm/>
      ) :(
        <div>Kullanıcı {currentUser}</div>
      )

      }
    </main>
  );
}

export default App;
