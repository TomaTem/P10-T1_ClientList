import {useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [moreUsers, setMoreUsers] = useState(1);

  return (
    <>
      <div>
        <Header moreUsers = {moreUsers} setMoreUsers={setMoreUsers}/>
        <Main moreUsers = {moreUsers}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
