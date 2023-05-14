import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard.js';

const Categories = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>Categories has no of news : {categoryNews.length}</h2>
            {
                categoryNews.map(news=><NewsSummeryCard
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Categories;