// import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Footer/Footer';
import LocalStorage from './LocalStorage/LocalStorage';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Container fluid>
        <LocalStorage />
        <Search />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
