import './App.css';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <div className="animated-bugs">
        <div className="bug"></div>
        <div className="bug"></div>
        <div className="bug"></div>
        <div className="bug"></div>
        <div className="bug"></div>
      </div>
      <Navbar />
      <header className="App-header">
        <h1>DEZI</h1>
        <p>Soluția ta unică pentru o casă fără dăunători.</p>
      </header>
      <main>
        <section id="services">
          <h2>Serviciile noastre</h2>
          <div className="services-list">
            <p>Oferim o gamă completă de servicii de dezinsecție și deratizare în București, inclusiv:</p>
            <ul>
              <li>Controlul general al dăunătorilor</li>
              <li>Tratament pentru ploșnițe</li>
              <li>Deratizare rozătoare</li>
              <li>Soluții personalizate pentru afaceri și locuințe</li>
            </ul>
          </div>
        </section>
        <section id="about">
          <h2>Despre noi</h2>
          <AboutUs />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="book">
          <h2>Programează o vizită</h2>
          <BookingForm />
        </section>
      </main>
    </div>
  );
}

export default App;
