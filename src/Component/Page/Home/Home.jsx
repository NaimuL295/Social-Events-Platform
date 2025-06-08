import React from 'react';
import Banner from '../../Banner/Banner';
import NewsLetter from '../../Newsletter/NewsLetter';
import GallerySection from '../../GallerySection/GallerySection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          
            <GallerySection></GallerySection> 
             <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;