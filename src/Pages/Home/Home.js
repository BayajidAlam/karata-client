import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import Loading from '../../components/Loading/Loading';
import OurServices from '../../components/OurServices/OurServices';
import Quality from '../../components/Quality/Quality';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Home = () => {
  const { loading } = useContext(AuthContext);
  if(loading){
    return <Loading/>
  }
  return (
   <section>
       <Banner/>
       <Quality/>
       <WhoWeAre/>
       <OurServices/>
       <WhyChooseUs/>
   </section>
  );
};

export default Home;