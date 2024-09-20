import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';  // 支持 GitHub 风格的 Markdown

import { postsData } from './AllInfos';  // 引入帖子数据

const PostDetail = () => {
    const { id } = useParams();
    const post = postsData.find(post => post.id === id);

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        if (post && post.content) {
            // 动态加载 .md 文件
            fetch(post.content)
                .then(response => response.text())
                .then(text => setMarkdownContent(text))
                .catch(err => console.error(err));
        }
    }, [post]);

    // 将判断逻辑放到 return 语句中，确保 Hooks 始终被调用
    if (!post) {
        return <div>Error: Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default PostDetail;