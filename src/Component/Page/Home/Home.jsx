import React from 'react';
import Banner from './Banner/Banner';
import NewsLetter from '../../Newsletter/NewsLetter';
import GallerySection from '../../GallerySection/GallerySection';
import FeaturesSection from '../../Share/FeaturesSection';
import Faq from "../../Share/Faq"
import TestimonialsSection from '../../Share/TestimonialsSection';
import ChatSection from './ChatSection/ChatSection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturesSection></FeaturesSection>
            <GallerySection></GallerySection> 
            <TestimonialsSection></TestimonialsSection>
             <Faq></Faq>
             <ChatSection></ChatSection>
             <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;