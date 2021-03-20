import React from 'react';
import NavbarComponent from '../components/shared/NavbarComponent';
import HeaderHome from '../containers/HeaderHome';
import OtherSection from '../containers/OtherSection';
// import CharactersPage from './CharactersPage';

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <div className='container'>
        <HeaderHome />
        <OtherSection />
      </div>
      {/* <CharactersPage /> */}
    </div>
  );
};

export default Home;

