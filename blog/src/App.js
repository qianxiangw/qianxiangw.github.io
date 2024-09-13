import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Blog from "./Blog";
import My from "./My";

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>个人博客</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/my">My</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* 使用 Routes 代替 Switch，并且使用 element 代替 component */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/my" element={<My />} />
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h2>欢迎来到我的博客</h2>
        <p>这是首页内容。</p>
    </div>
);

export default App;