import './App.css';
import './styles/components/layout/Footer.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Modal.css';
import './styles/components/layout/Places.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Places from './components/layout/Places';

function App() {
  return (
    <div>
      <Header />
      <Places />
      <Footer />
    </div>
  );
}

export default App;
