import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export default function Footer() {
  // Get the two most recent blog posts for the widget
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-widgets">
          {/* Column 1: About */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Administrative Mission</h3>
            <p style={{ marginBottom: '15px' }}>
              For over 15 years, I have dedicated my career to keeping offices running with absolute precision. My focus is on turning operational chaos into streamlined digital workflows, protecting client confidentiality, and supporting cross-departmental success.
            </p>
            <p>
              <em>"An office doesn't run on coffee alone—it runs on airtight scheduling, spotless databases, and zero lost files."</em>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Quick Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home & Overview</Link></li>
              <li><Link to="/about">About & Philosophy</Link></li>
              <li><Link to="/experience">Career Experience</Link></li>
              <li><Link to="/blog">Field Insights Blog</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Column 3: Recent Articles */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Recent Insights</h3>
            <ul className="footer-recent-posts">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  <div className="footer-recent-date">{post.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Office Registry</h3>
            <ul className="footer-contact-list" style={{ paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Email:</strong>&nbsp;
                <a href="mailto:kemeryowenjeanmarie@gmail.com">kemeryowenjeanmarie@gmail.com</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Phone:</strong>&nbsp;
                <a href="tel:+18045521943">+1 (804) 552-1943</a>
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.4' }}>
                <strong>Address:</strong><br />
                <span>
                  3519 Bluffside Dr,<br />
                  North Chesterfield, VA 23237
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="container">
          <p>© 2026 Jean Marie Kemery-Owen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
