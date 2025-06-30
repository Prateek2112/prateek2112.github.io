
import React from 'react';
import { BLOG_POSTS_DATA } from '../constants';
import Card from './Card';

const Blog: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 fade-in-up">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS_DATA.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-1 flex-grow flex flex-col mt-4">
              <p className="text-sm font-semibold text-sky-400">{post.category}</p>
              <h3 className="text-xl font-bold text-white mt-2 flex-grow">{post.title}</h3>
              <p className="text-slate-400 mt-2">{post.excerpt}</p>
              <p className="text-xs text-slate-500 mt-4">{post.readTime}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
