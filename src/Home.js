import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { postsData } from './AllInfos';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState('全部');
    const [sortOrder, setSortOrder] = useState('最新');

    const handleSortToggle = () => {
        setSortOrder(sortOrder === '最新' ? '最热' : '最新');
    };

    const filteredPosts = postsData.filter(post => {
        if (selectedTab === '全部') return true;
        return post.category === selectedTab;
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortOrder === '最新') {
            return new Date(b.date) - new Date(a.date);
        }
        if (sortOrder === '最热') {
            return b.count - a.count;
        }
        return 0;
    });

    return (
        <div className="content">
            <div className="tabs-container">
                <div className="tabs-left">
                    <button
                        className={`tab-button ${selectedTab === '全部' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('全部')}
                    >
                        全部
                    </button>
                    <button
                        className={`tab-button ${selectedTab === '技术' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('技术')}
                    >
                        技术
                    </button>
                    <button
                        className={`tab-button ${selectedTab === '生活' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('生活')}
                    >
                        生活
                    </button>
                </div>
                <div className="tabs-right">
                    <button className="sort-button" onClick={handleSortToggle}>
                        {sortOrder} <img src="/pics/sort.png" alt="sort" className="sort-img"/>
                    </button>
                </div>
            </div>

            {/* Post 列表展示 */}
            <div className="posts">
                {sortedPosts.map((post, index) => (
                    <Link key={index} to={`/post/${post.id}`} className="post-link">
                        <div className="post">
                            <div className="post-header">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <div className="post-line">
                                    <span>{`${post.date} - ${post.author} - `}</span>
                                    <img src="/pics/heart.png" alt="heart" className="heart-img"/>
                                    <span>{`${post.count}`}</span>
                                </div>
                            </div>
                            <img src={post.image} alt="post-image" className="post-img"/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;