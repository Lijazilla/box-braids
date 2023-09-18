import logoWithoutBackground from './components/assets/images/logo-letter-png.png'
import './App.css';
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>

        <div className='container-inside-navbar'>

          <div className='main-logo'>
            <img src={logoWithoutBackground} className='logo'/>
          </div>

          <div className='menu'>
            <ul className='options-menu'>
              <li>Acerca de mi</li>
              <li>Servicios</li>
              <li>Contacto</li> 
            </ul>
          </div>

        </div>
      </nav>

    

      <section className='main-container'>

      <div className='main-container-text'>
          <p>- Aplicación de Trenzas con Extensión</p>
          <p>- Aplicación de Curly Hair en crochet</p>
          <p>- Dreadlocks o Rastas con extensión</p>
          <p>- Trenzados y peinados</p>

        </div>

        <div className="wavy-div">
        <Carousel/>
        </div>

      

      </section>

      

    </div>
  );
}

export default App;
