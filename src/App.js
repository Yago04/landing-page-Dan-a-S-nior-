import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navbar';
import MediaCarousel from './components/MediaCarousel';
import HeroSection from './components/HeroSection';
import AssociadoSection from './components/AssociadoSection';
import DirigenteSection from './components/DirigenteSection';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MediaCarousel />
      <NavigationBar />
      <HeroSection />
      <AssociadoSection />
      <DirigenteSection />  
      <CoursesSection />
      <Footer />
    



    </div>
  );
}

export default App;
