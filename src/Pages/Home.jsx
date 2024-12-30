import React from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices ';
import MeetOurPartners from './MeetOurPartners ';
import CountupSection from './CountupSection'; 
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetOurPartners></MeetOurPartners> 
             <HowItWorks></HowItWorks>
            <CountupSection></CountupSection>
        </div>
    );
};

export default Home;