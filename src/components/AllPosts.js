import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import PostCard from './PostCard';
import './AppPosts.css'

const AllPosts = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
        setLoading(true)
        const result = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed');
        setArticles(result.data);
        setLoading(false);
    }


    useEffect(() => {
        getPosts();
    }, [])


    return (

        <div className='mainAllPostsContainer'>

            <h1 align='center' >All Posts</h1>

            {loading ? <img alt='loading'  align='center' width='200px' src='loadin.gif' /> : null}

            <div className='allPostContainer'>
                {articles ?
                    articles.map((item) => (

                        <>
                            <PostCard data={item} />

                        </>

                    ))
                    : null}

            </div>
        </div>
    )
}


export default AllPosts