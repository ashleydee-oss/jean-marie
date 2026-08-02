import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { blogPosts, categories, archives, tags } from '../data/blogData';

export default function Sidebar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Sync search input value with searchParams
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/blog');
    }
  };

  // Helper to count posts in category
  const getCategoryCount = (category) => {
    return blogPosts.filter(post => post.category === category).length;
  };

  return (
    <aside className="sidebar" id="sidebar">
      {/* Widget 1: Author Card */}
      <section className="widget author-widget">
        <div className="author-avatar" aria-hidden="true" style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
          JM
        </div>
        <h3 className="author-name">Jean Marie Kemery-Owen</h3>
        <p className="author-title">Administrative Maestro</p>
        <p className="author-bio">
          Administrative Office Coordinator with 15+ years of experience streamlining operations, digitalizing paper workflows, and organizing executive schedules in Richmond & Chesterfield, VA.
        </p>
      </section>

      {/* Widget 2: Search Bar */}
      <section className="widget">
        <h3 className="widget-title">Search Blog</h3>
        <form className="search-form" onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '5px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search articles"
            style={{ flex: 1 }}
          />
          <button 
            type="submit" 
            className="read-more-btn" 
            style={{ padding: '8px 12px', fontSize: '0.8rem' }}
          >
            Search
          </button>
        </form>
      </section>

      {/* Widget 3: Categories */}
      <section className="widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="widget-list">
          {categories.map((cat, idx) => {
            const count = getCategoryCount(cat);
            return (
              <li key={idx} className="widget-list-item">
                <Link to={`/blog?category=${encodeURIComponent(cat)}`}>
                  {cat}
                </Link>
                <span className="post-count">{count}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Widget 4: Archives */}
      <section className="widget">
        <h3 className="widget-title">Archives</h3>
        <ul className="widget-list">
          {archives.map((archive, idx) => {
            const count = blogPosts.filter(post => post.date.includes(archive.split(' ')[0]) && post.date.includes(archive.split(' ')[1])).length;
            return (
              <li key={idx} className="widget-list-item">
                <Link to={`/blog?archive=${encodeURIComponent(archive)}`}>
                  {archive}
                </Link>
                <span className="post-count">{count}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Widget 5: Tag Cloud */}
      <section className="widget">
        <h3 className="widget-title">Tags</h3>
        <div className="tag-cloud">
          {tags.map((tag, idx) => (
            <Link
              key={idx}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`tag-cloud-link ${searchParams.get('tag') === tag ? 'active' : ''}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
