import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import My from './My';
import PostDetail from './PostDetail'; // 详情页面组件
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="home-container">
                <header className="header">
                    {/* 点击 h1 跳转到 Home 页面 */}
                    <Link to="/" className="header-h1">
                        千想
                    </Link>
                    {/* 点击 img 跳转到 My 页面 */}
                    <Link to="/my">
                        <img src="/pics/head.png" alt="head" className="header-img"/>
                    </Link>
                </header>
                {/* 路由配置 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my" element={<My />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;