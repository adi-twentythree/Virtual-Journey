import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 

  Home, Portfolio, Contact, About, Gallery, Videos, 
  
  Baradwari, VishnuMandir, KaliMandir,

  GB, GKM, GVM, GRT, GSD, GSG,

} from './pages/Index';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};


const MainContent = () => {
  const location = useLocation();

  return (
    <main className="bg-slate-50 text-black min-h-screen flex flex-col">
      {!['/baradwari', '/vishnumandir', '/kalimandir' ].includes(location.pathname) && <Navbar />}
      <div className="flex-grow">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<Videos/>} />

          <Route path="baradwari" element={<Baradwari/>} />
          <Route path="vishnumandir" element={<VishnuMandir/>} />
          <Route path="kalimandir" element={<KaliMandir/>} />
          
          <Route path="/gallery/baradwari" element={<GB />} />
          <Route path="/gallery/kali-mandir" element={<GKM />} />
          <Route path="/gallery/vishnu-mandir" element={<GVM />} />
          <Route path="/gallery/ranachandi-temple" element={<GRT />} />
          <Route path="/gallery/singha-dwar" element={<GSD />} />
          <Route path="/gallery/shan-ghar" element={<GSG />} />

          
        </Routes>
      </div>
      {!['/baradwari', '/vishnumandir', '/kalimandir' ].includes(location.pathname) && <Footer />}

    </main>
  );
};

export default App;