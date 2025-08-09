import React from 'react';
import Banner from '../../Banner/Banner';
import NewsLetter from '../../Newsletter/NewsLetter';
import GallerySection from '../../GallerySection/GallerySection';
import FeaturesSection from '../../Share/FeaturesSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <FeaturesSection></FeaturesSection>
            <GallerySection></GallerySection> 
      
             <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;