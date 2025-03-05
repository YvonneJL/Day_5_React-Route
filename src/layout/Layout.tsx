import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = () => {
  // useLocation() gibt uns den aktuellen Pfad zurück
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer wird nur angezeigt, wenn nicht auf Home */}
      {location.pathname !== '/home' && <Footer />}
    </>
  );
};

export default Layout;
