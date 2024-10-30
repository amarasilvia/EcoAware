import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Artikel from './components/Artikel';
import Galeri from './components/Galeri'; // Tambahkan ini

function Home() {
  return (
    <div >
      <Navbar textColor='text-white'/>
      <Hero/>
      <Artikel/>
      <Galeri/> {/* Pastikan Galeri adalah komponen yang valid */}
    </div>
  );
}

export default Home;