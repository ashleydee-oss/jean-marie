import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export default function BlogDirectory() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract filter terms
  const searchFilter = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || '';
  const archiveFilter = searchParams.get('archive') || '';
  const tagFilter = searchParams.get('tag') || '';

  // Compute filtered posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      // 1. Search filter
      if (searchFilter) {
        const query = searchFilter.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesContent = post.content.toLowerCase().includes(query);
        const matchesTag = post.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesExcerpt && !matchesContent && !matchesTag) {
          return false;
        }
      }

      // 2. Category filter
      if (categoryFilter && post.category !== categoryFilter) {
        return false;
      }

      // 3. Archive filter (e.g. "June 2026" should match posts in June 2026)
      if (archiveFilter) {
        const parts = archiveFilter.split(' ');
        if (parts.length === 2) {
          const [month, year] = parts;
          const matchesMonth = post.date.includes(month);
          const matchesYear = post.date.includes(year);
          if (!matchesMonth || !matchesYear) {
            return false;
          }
        }
      }

      // 4. Tag filter
      if (tagFilter && !post.tags.includes(tagFilter)) {
        return false;
      }

      return true;
    });
  }, [searchFilter, categoryFilter, archiveFilter, tagFilter]);

  // Clear a specific filter parameter
  const clearFilter = (paramName) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(paramName);
    setSearchParams(newParams);
  };

  // Clear all filter parameters
  const clearAllFilters = () => {
    setSearchParams({});
  };

  // Check if any filter is active
  const hasActiveFilters = searchFilter || categoryFilter || archiveFilter || tagFilter;

  return (
    <main id="main-content">
      <h1 style={{ fontSize: '2.2rem', marginBottom: '25px' }}>Field Insights & Operations Blog</h1>

      {/* Filter Status Bar */}
      {hasActiveFilters && (
        <div 
          style={{ 
            backgroundColor: 'var(--sidebar-bg)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '0px',
            padding: '12px 18px',
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Active Filters:</span>
            {searchFilter && (
              <span className="post-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--card-bg)' }}>
                Search: "{searchFilter}"
                <span style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => clearFilter('search')}>x</span>
              </span>
            )}
            {categoryFilter && (
              <span className="post-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--card-bg)' }}>
                Category: {categoryFilter}
                <span style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => clearFilter('category')}>x</span>
              </span>
            )}
            {archiveFilter && (
              <span className="post-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--card-bg)' }}>
                Archive: {archiveFilter}
                <span style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => clearFilter('archive')}>x</span>
              </span>
            )}
            {tagFilter && (
              <span className="post-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--card-bg)' }}>
                Tag: #{tagFilter}
                <span style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => clearFilter('tag')}>x</span>
              </span>
            )}
          </div>
          <button 
            onClick={clearAllFilters}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--primary)', 
              fontWeight: '700', 
              cursor: 'pointer',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              textDecoration: 'underline'
            }}
          >
            Clear All
          </button>
        </div>
      )}

      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <article key={post.id} className="card blog-post-card">
            <header className="post-header">
              <h2 className="post-title">
                <Link to={`/blog/${post.slug}`} style={{ color: 'var(--dark-text)' }}>
                  {post.title}
                </Link>
              </h2>
              <div className="post-meta">
                <span className="meta-item">
                  Published: {post.date}
                </span>
                <span style={{ color: '#ccc' }}>|</span>
                <span className="meta-item">
                  Category:&nbsp;
                  <Link to={`/blog?category=${encodeURIComponent(post.category)}`}>
                    {post.category}
                  </Link>
                </span>
                <span style={{ color: '#ccc' }}>|</span>
                <span className="meta-item">
                  {post.readTime}
                </span>
              </div>
            </header>

            <p className="post-excerpt">{post.excerpt}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
              <Link to={`/blog/${post.slug}`} className="read-more-btn">
                Read More →
              </Link>

              <div style={{ display: 'flex', gap: '6px' }}>
                {post.tags.map((tag, idx) => (
                  <Link key={idx} to={`/blog?tag=${tag}`} className="post-tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: '50px 30px' }}>
          <h3 style={{ marginBottom: '15px' }}>No Insights Found</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            We couldn't find any articles matching your search query or filters.
          </p>
          <button onClick={clearAllFilters} className="read-more-btn">
            Reset All Filters
          </button>
        </div>
      )}
    </main>
  );
}
