import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard.js';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>Home: {news.length}</h2>
            {
                news.map(news => <NewsSummeryCard
                key = {news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;