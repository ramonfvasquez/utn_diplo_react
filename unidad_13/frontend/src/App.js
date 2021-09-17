import './App.css';
import './styles/components/layout/CloseButton.css';
import './styles/components/layout/Footer.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Main.css';
import './styles/components/layout/Modal.css';
import './styles/components/layout/ModalHeader.css';
import './styles/components/layout/NavButton.css';
import './styles/components/layout/PlaceButton.css';
import './styles/components/layout/Title.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Modal from './components/layout/Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
