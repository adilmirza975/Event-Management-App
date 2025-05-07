// src/layouts/MainLayout.jsx
import Header from '../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer'
// import Footer from '../pages/Contact/Contact'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      {/* <Contact />  */}
      <Footer /> 

    </>
  );
};

export default MainLayout;
