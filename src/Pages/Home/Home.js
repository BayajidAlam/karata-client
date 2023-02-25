import React from 'react';
import Banner from '../../components/Banner/Banner';
import Quality from '../../components/Quality/Quality';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';

const Home = () => {
  return (
   <section>
       <Banner/>
       <Quality/>
       <WhoWeAre/>
   </section>
  );
};

export default Home;