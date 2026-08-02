import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export default function Home() {
  // Tabs for "A Day in the Life"
  const [activeTab, setActiveTab] = useState('morning');

  const timelineEvents = {
    morning: {
      time: "07:30 AM – The Inbox & Calendar Triage",
      title: "Untangling the Executive Gridlock",
      description: "My day begins before the phones start ringing. I audit the executive calendar for the day, looking for the inevitable double-bookings. Today, the Director of Chesterfield Regional Support Services is scheduled for two different steering committee meetings at 10:00 AM. I coordinate with the second committee coordinator, move his slot to 11:30 AM, book Room B, and draft his briefing notes so they are sitting on his desk before he even pours his first cup of coffee.",
      tip: "Pro Coordinator Tip: Always keep 15-minute buffers between departmental meetings. People are not teleporters."
    },
    midday: {
      time: "10:30 AM – The Vendor Diplomacy Hour",
      title: "Supply Chain & Coffee Security",
      description: "A local delivery truck arrives with our monthly compliance forms and copier toners, but two cases are missing. Instead of launching into an angry email, I call our local supplier representative. We've built a solid relationship over the years, so he personally routes an emergency courier to deliver the missing stock by 1:00 PM. Meanwhile, I reconcile the delivery invoice against our supply ledger and update the budget spreadsheet.",
      tip: "Pro Coordinator Tip: Treat delivery drivers and account managers like gold. They keep your supply lines alive when systems break down."
    },
    afternoon: {
      time: "02:00 PM – The Digital Records Deep-Dive",
      title: "Processing Client Intake Batches",
      description: "This is where precision matters. I sit down to process a batch of twenty client intake forms. Under our automated electronic database system (which I helped configure), I audit each field for compliance. A case manager has left a signature field blank. I route it back with a friendly alert, then log the remaining complete entries into our secure, permission-locked cloud archive.",
      tip: "Pro Coordinator Tip: Standardization is the enemy of chaos. Name every file: YYYY-MM-DD_Category_ClientName."
    },
    evening: {
      time: "04:30 PM – The Audit-Proof Audit",
      title: "End-of-Day Compliance Run",
      description: "Before locking up, I conduct a quick audit of the daily compliance logs. I ensure that no physical paperwork is left on desks, run our automated end-of-day encrypted backup, and clear my inbox to 'zero'. I review the calendar for tomorrow morning, log my hours, and leave the office clean and ready for the next day's adventures.",
      tip: "Pro Coordinator Tip: Never leave the office with active client papers on your desk. Privacy compliance is a full-time commitment."
    }
  };

  // Get latest 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="home-page">
      {/* Editorial Welcome Post Header */}
      <section className="card">
        <h1 style={{ fontSize: '2.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '15px' }}>
          Welcome to the Operations Center
        </h1>
        <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>
          Site Pinned Post &bull; Written by Jean Marie Kemery-Owen &bull; Chesterfield, VA
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '500', margin: '0' }}>
          Taming Office Chaos, Streamlining Digital Records, and Keeping Teams Running Smoothly in Virginia Since 2008.
        </p>
      </section>

      {/* Philosophy Card */}
      <section className="card philosophy-card">
        <div className="philosophy-quote">
          "An office doesn't run on coffee alone—it runs on airtight scheduling, spotless databases, vendor diplomacy, and zero lost files."
        </div>
        <p style={{ margin: '0', fontSize: '1rem', color: '#555', fontStyle: 'italic' }}>
          — Jean Marie's Core Administrative Doctrine
        </p>
      </section>

      {/* Professional Narrative Bio */}
      <section className="card">
        <h2>Professional Biography & Office Philosophy</h2>
        <p>
          I am a veteran Administrative Office Coordinator based in North Chesterfield, Virginia, with over 15 years of dedicated experience running corporate and regional support offices. Throughout my career, I've served as the central hub of departmental operations—moving seamlessly between executive schedule coordination, digital database management, and supplier relations. 
        </p>
        <p>
          My journey began at <strong>Richmond Corporate Partners</strong> in 2008, where I managed multi-line call systems and designed filing taxonomies that turned physical paper files into structured, easily searchable directories. In 2015, I transitioned to <strong>Chesterfield Regional Support Services</strong>, taking on a broader operations scope that includes processing hundreds of client intake records, auditing compliance sheets, coordinating regional board schedules, and training junior staff on data privacy guidelines.
        </p>
        <p>
          I believe that administration is a craft. A well-organized filing tree, a balanced inventory ledger, and an error-free client database are not just tasks—they are the infrastructure that allows therapists, managers, and executives to do their best work. When an office is organized, the entire team is empowered.
        </p>
      </section>

      {/* Operational Competencies Matrix */}
      <section className="card">
        <h2>Operational Competencies & Software Matrix</h2>
        <p>My work is built on four core operational pillars, combining specialized administrative training with modern productivity suites:</p>
        <div className="pillars-table-wrapper">
          <table className="pillars-table">
            <thead>
              <tr>
                <th>Pillar</th>
                <th>Core Responsibilities</th>
                <th>Tools & Systems Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>1. Workflow & Calendar Optimization</strong>
                </td>
                <td>
                  Executive diary coordination, board meeting logs, inter-departmental scheduling, buffer-time maintenance, room reservations, and video sync setup.
                </td>
                <td>Microsoft Outlook, Google Workspace, Zoom, MS Teams, Slack.</td>
              </tr>
              <tr>
                <td>
                  <strong>2. Records & Digital Database Systems</strong>
                </td>
                <td>
                  Electronic intake form auditing, client file taxonomy creation, role-based cloud permission audits, and secure record transitions.
                </td>
                <td>MS Access, Excel Databases, SharePoint, OneDrive, Adobe Acrobat Pro.</td>
              </tr>
              <tr>
                <td>
                  <strong>3. Financial & Supply Operations</strong>
                </td>
                <td>
                  Vendor relations, bulk procurement, delivery log audits, monthly budget tracking, invoice matching, and basic ledger entries.
                </td>
                <td>QuickBooks Online, MS Excel (pivot tables, lookup formulas), inventory trackers.</td>
              </tr>
              <tr>
                <td>
                  <strong>4. Communication & Conflict Resolution</strong>
                </td>
                <td>
                  Multi-line call routing, client onboarding support, vendor escalation handling, training junior admin staff, and drafting office policy sheets.
                </td>
                <td>VoIP systems, custom training manuals, conflict resolution protocols.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive: A Day in the Life */}
      <section className="card">
        <h2>A Day in the Life of an Office Mastermind</h2>
        <p>Running a regional support service office is a dynamic exercise in priority shifting. Explore the timeline below to see how I handle the daily flow and resolve real-world administrative hurdles:</p>
        
        <div className="timeline-tabs">
          <button 
            className={`timeline-tab-btn ${activeTab === 'morning' ? 'active' : ''}`}
            onClick={() => setActiveTab('morning')}
          >
            07:30 AM - Morning Triage
          </button>
          <button 
            className={`timeline-tab-btn ${activeTab === 'midday' ? 'active' : ''}`}
            onClick={() => setActiveTab('midday')}
          >
            10:30 AM - Vendor Diplomacy
          </button>
          <button 
            className={`timeline-tab-btn ${activeTab === 'afternoon' ? 'active' : ''}`}
            onClick={() => setActiveTab('afternoon')}
          >
            02:00 PM - Digital Records
          </button>
          <button 
            className={`timeline-tab-btn ${activeTab === 'evening' ? 'active' : ''}`}
            onClick={() => setActiveTab('evening')}
          >
            04:30 PM - Audit & Wrap
          </button>
        </div>

        <div className="timeline-content-box">
          <span className="timeline-time">{timelineEvents[activeTab].time}</span>
          <h3 className="timeline-task-title">{timelineEvents[activeTab].title}</h3>
          <p>{timelineEvents[activeTab].description}</p>
          <p style={{ fontStyle: 'italic', color: '#D9531E', margin: '0', fontWeight: '600' }}>
            {timelineEvents[activeTab].tip}
          </p>
        </div>
      </section>

      {/* VCU Spotlight */}
      <section className="vcu-spotlight">
        <img 
          src="https://static.studyusa.com/school/VA006-5-ipad.jpg?format=webp" 
          alt="VCU Campus Logo" 
          className="vcu-logo-img" 
        />
        <div className="vcu-info">
          <h3>Academic Foundation: Virginia Commonwealth University</h3>
          <p className="vcu-sub">B.S. in Business Administration (Class of 2006) | Richmond, VA</p>
          <p style={{ margin: '0', fontSize: '0.95rem' }}>
            My degree from VCU focused on Office Administration and Organizational Communication. This academic foundation connects theoretical business systems directly to my work: understanding organizational hierarchies, drafting crystal-clear training documentation, and designing secure digital filing structures.
          </p>
        </div>
      </section>

      {/* Featured Insights & Articles */}
      <section className="card" style={{ marginTop: '30px' }}>
        <h2 style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span>Featured Field Insights</span>
          <Link to="/blog" className="read-more-btn" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
            View All Posts →
          </Link>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {featuredPosts.map((post) => (
            <div key={post.id} style={{ borderBottom: '1px dashed var(--border-color)', paddingBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                <Link to={`/blog/${post.slug}`} style={{ color: 'var(--dark-text)' }}>
                  {post.title}
                </Link>
              </h3>
              <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>
                {post.date} &bull; <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{post.category}</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '12px' }}>
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                Read Full Entry →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
