import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import WeHelped from '../Wehelped/Wehelped';
import ThreeService from '../ThreeService/ThreeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <WeHelped></WeHelped>
            <ThreeService></ThreeService>
        </div>
    );
};

export default Home;