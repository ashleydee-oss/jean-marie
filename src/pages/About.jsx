import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <section className="card">
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>About Jean Marie Kemery-Owen</h1>
        <p className="site-tagline" style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--primary)', fontWeight: '600' }}>
          Administrative Office Coordinator & Digital Records Lead based in Richmond, Virginia
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', margin: '30px 0' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', borderLeft: '3px solid var(--primary)', paddingLeft: '10px', marginBottom: '12px' }}>
              The Hub of Office Operations
            </h3>
            <p>
              I am an Administrative Office Coordinator with more than 15 years of professional experience managing multi-departmental corporate offices and support services. Currently operating out of North Chesterfield, Virginia, I specialize in taming office chaos, standardizing record systems, coordinating executive logistics, and maintaining complete regulatory compliance.
            </p>
            <p>
              Throughout my career, I've served as the central engine of daily operations. I look at office workflows as a series of interconnected systems: a delay in vendor procurement impacts copy center functionality, a typo in a client intake database delays funding audits, and a double-booked calendar stresses directors and compromises vendor contracts. By managing these details with absolute precision, I keep teams running smoothly and confidently.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.4rem', borderLeft: '3px solid var(--primary)', paddingLeft: '10px', marginBottom: '12px' }}>
              Administrative Philosophy
            </h3>
            <p>
              My philosophy is simple: <strong>organization is an act of empathy</strong>. A clean desktop, a structured server drive, and a prompt response to a billing discrepancy are not just tasks—they are ways of showing colleagues, clients, and vendors that you respect their time, privacy, and peace of mind. 
            </p>
            <p>
              While I embrace digital databases, intake automation systems, and scheduling software, I never lose sight of the human touch. Empathetic conflict resolution, welcoming onboarding calls, and strong local supplier relationships are what turn a cold workspace into a thriving corporate community.
            </p>
          </div>
        </div>
      </section>

      {/* VCU & Education Section */}
      <section className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
        <h2 style={{ marginBottom: '15px' }}>
          Educational Foundation
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>Bachelor of Science in Business Administration</h3>
            <p style={{ fontWeight: '600', color: '#666', margin: '0 0 10px 0' }}>
              Virginia Commonwealth University (VCU) | Richmond, VA (2002 – 2006)
            </p>
            <p style={{ margin: '0' }}>
              My degree in Business Administration formed the baseline of my operational strategy. During my studies, I focused on <strong>Business Management, Office Administration, and Organizational Communication</strong>. These modules taught me how information travels across large departments, how to plan inventory cycles, and how to design policy frameworks that meet regulatory standards. I apply these academic principles daily when building audit-proof digital file taxonomies and designing training plans for new office hires.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Box */}
      <section className="card">
        <h2 style={{ marginBottom: '20px' }}>What I Bring to the Table</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: 'var(--primary)' }}>&bull; Records Modernization & Database Hygiene</h4>
              <p style={{ margin: '0 0 0 12px', fontSize: '0.95rem', color: '#555' }}>
                Transitioned physical file assets to clean, role-permissioned cloud storage. Established naming conventions that reduced file search times from minutes to seconds.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: 'var(--primary)' }}>&bull; Complex Schedule Coordination</h4>
              <p style={{ margin: '0 0 0 12px', fontSize: '0.95rem', color: '#555' }}>
                Successfully managing cross-departmental board calendars, coordinate executive schedules, reservation logs for meeting areas, and buffer times.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: 'var(--primary)' }}>&bull; Local Supply Line & Vendor Logistics</h4>
              <p style={{ margin: '0 0 0 12px', fontSize: '0.95rem', color: '#555' }}>
                Auditing delivery logs, maintaining par inventory lines, sifting budgets, and establishing strong connections with local Richmond supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
