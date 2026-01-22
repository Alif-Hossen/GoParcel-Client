import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import WeHelped from '../Wehelped/Wehelped';
import ThreeService from '../ThreeService/ThreeService';
import Merchant_Customer from '../Merchant&Customer/Merchant_Customer';
import CustomerSay from '../CustomerSay/CustomerSay';
import FrequentlyAskQuestion from '../FrequentlyAskedQuestion/FrequentlyAskQuestion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <WeHelped></WeHelped>
            <ThreeService></ThreeService>
            <Merchant_Customer></Merchant_Customer>
            <CustomerSay></CustomerSay>
            <FrequentlyAskQuestion></FrequentlyAskQuestion>
        </div>
    );
};

export default Home;