import React from 'react';
import Banner from '../Components/Banner';
import FeaturedServices from '../Components/FeaturedServices ';
import MeetOurPartners from './MeetOurPartners ';
import CountupSection from './CountupSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetOurPartners></MeetOurPartners>
            <CountupSection></CountupSection>
        </div>
    );
};

export default Home;