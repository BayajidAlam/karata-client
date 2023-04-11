import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import BodyBalance from '../../components/BodyBalance/BodyBalance';
import Classes from '../../components/Classes/Classes';
import Gallery from '../../components/Gallery/Gallery';
import Loading from '../../components/Loading/Loading';
import OurServices from '../../components/OurServices/OurServices';
import Quality from '../../components/Quality/Quality';
import Teacher from '../../components/Teacher/Teacher';
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
       <Classes/>
       <BodyBalance/>
       <Teacher/>
       <Gallery/>
   </section>
  );
};

export default Home;