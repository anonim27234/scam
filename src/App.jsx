import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import MissingRoute from './pages/MissingRoute';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import "./style.css"
import AboutFund from './pages/AboutFund';
import Otchet from './pages/Otchet';
import ProjectDetail from './pages/OtchetDetail';
import Projects from './pages/Projects';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} exact/>
        <Route path='/about' element={<AboutFund />} exact/>
        <Route path='/otchet' element={<Otchet />} exact/>
        <Route path='/otchet/:projectTitle' element={<ProjectDetail />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path="*" element={<MissingRoute/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
