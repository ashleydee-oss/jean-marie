import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find current post
  const currentIdx = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[currentIdx];

  // Handle redirects if post slug is invalid
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  // Find next/prev posts
  const prevPost = currentIdx < blogPosts.length - 1 ? blogPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? blogPosts[currentIdx - 1] : null;

  // Comment State (initialize as empty, no fake comments)
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Load comments from local storage or set defaults (empty by default)
  useEffect(() => {
    const storageKey = `comments_${slug}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setComments(JSON.parse(stored));
    } else {
      setComments([]);
      localStorage.setItem(storageKey, JSON.stringify([]));
    }
    // Reset submission messages when post changes
    setSuccessMsg('');
    setName('');
    setEmail('');
    setCommentText('');
    
    // Scroll to top of article page
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Handle Comment Submission
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!name || !commentText) return;

    const newComment = {
      name: name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      text: commentText
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments_${slug}`, JSON.stringify(updatedComments));

    // Clear form & alert success
    setName('');
    setEmail('');
    setCommentText('');
    setSuccessMsg('Your comment has been published successfully!');
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <main id="main-content">
      <article className="card">
        {/* Back to Blog directory link */}
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', marginBottom: '20px', fontWeight: '600' }}>
          ← Back to Blog Directory
        </Link>

        <header className="post-header">
          <h1 style={{ fontSize: '2.1rem', lineHeight: '1.25', marginBottom: '15px' }}>{post.title}</h1>
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

        {/* Main HTML content of the blog post */}
        <div 
          className="single-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Tags and Social Share Bar */}
        <div className="post-footer-tags">
          <span className="post-tags-label">Tags:</span>
          {post.tags.map((tag, idx) => (
            <Link key={idx} to={`/blog?tag=${tag}`} className="post-tag-pill">
              #{tag}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '600' }}>Share Entry:</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#share" onClick={(e) => {e.preventDefault(); alert("Shared link copied to clipboard!")}} className="post-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
              Copy Link
            </a>
          </div>
        </div>
      </article>

      {/* Author Box Widget */}
      <div className="author-box">
        <div className="author-box-avatar" aria-hidden="true" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
          JM
        </div>
        <div className="author-box-info">
          <h4>Jean Marie Kemery-Owen</h4>
          <p className="author-box-bio">
            Administrative Office Coordinator for Chesterfield Regional Support Services. Veteran office organizer, database systems specialist, and Richmond native who believes that clear procedures lead to confident, happy teams.
          </p>
        </div>
      </div>

      {/* Post Pagination Navigation Links */}
      <nav className="post-pagination" aria-label="Post navigation">
        <div className="page-link-prev">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} style={{ textAlign: 'left' }}>
              <span className="page-link-label">← Older Post</span>
              <span className="page-link-title">{prevPost.title}</span>
            </Link>
          ) : (
            <span style={{ color: '#999' }}>
              <span className="page-link-label">← Older Post</span>
              <span className="page-link-title" style={{ display: 'block' }}>First Article reached</span>
            </span>
          )}
        </div>

        <div className="page-link-next">
          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} style={{ textAlign: 'right' }}>
              <span className="page-link-label">Newer Post →</span>
              <span className="page-link-title">{nextPost.title}</span>
            </Link>
          ) : (
            <span style={{ color: '#999', textAlign: 'right' }}>
              <span className="page-link-label">Newer Post →</span>
              <span className="page-link-title" style={{ display: 'block' }}>Latest Article reached</span>
            </span>
          )}
        </div>
      </nav>

      {/* Comments Section */}
      <section className="comments-area" id="comments">
        <h3 className="comments-title">
          {comments.length} Comment{comments.length !== 1 ? 's' : ''} on this article
        </h3>

        {comments.length > 0 ? (
          <ol className="comment-list">
            {comments.map((cmt, idx) => (
              <li key={idx} className="comment-item">
                <div className="comment-meta">
                  <span className="comment-author">{cmt.name}</span>
                  <span className="comment-date">{cmt.date}</span>
                </div>
                <div className="comment-content">
                  <p>{cmt.text}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '30px' }}>No comments yet. Be the first to express your thoughts!</p>
        )}

        {/* Comment Form */}
        <div className="comment-respond">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Leave a Comment</h3>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '20px' }}>
            Your email address will not be published. Required fields are marked *
          </p>

          {successMsg && <div className="form-success-alert">{successMsg}</div>}

          <form onSubmit={handleSubmitComment} className="comment-form">
            <div className="form-group">
              <label htmlFor="comment-text">Comment *</label>
              <textarea
                id="comment-text"
                className="form-control"
                rows="6"
                required
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Type your thoughts here..."
              ></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div className="form-group">
                <label htmlFor="author-name">Name *</label>
                <input
                  type="text"
                  id="author-name"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="author-email">Email (will not show) *</label>
                <input
                  type="email"
                  id="author-email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <button type="submit" className="form-submit-btn">
              Submit Comment
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
