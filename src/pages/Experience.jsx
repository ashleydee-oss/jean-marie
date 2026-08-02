import React from 'react';

export default function Experience() {
  return (
    <div className="experience-page">
      <section className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '2.2rem' }}>Professional Experience</h1>
          <a 
            href="mailto:kemeryowenjeanmarie@gmail.com" 
            className="read-more-btn"
            style={{ fontSize: '0.85rem' }}
          >
            Request Full PDF Resume
          </a>
        </div>
        <p>
          A comprehensive breakdown of my professional journey in administrative operations, office workflow development, and digital records management across Virginia.
        </p>
      </section>

      {/* Work History Timeline */}
      <section className="card">
        <h2 style={{ marginBottom: '25px' }}>
          Employment Chronology
        </h2>

        <div className="experience-timeline">
          {/* Role 1 */}
          <div className="experience-item">
            <span className="exp-date">2015 – Present</span>
            <h3 className="exp-title">
              Administrative Office Coordinator
              <span className="badge">Current</span>
            </h3>
            <div className="exp-company">Chesterfield Regional Support Services &bull; North Chesterfield, VA</div>
            <ul className="exp-details">
              <li>
                Manage daily office operations, intake systems, and calendar logistics for a regional support office of 40+ medical and administrative staff.
              </li>
              <li>
                Led the complete digital transition of client records from physical folders to an encrypted cloud database taxonomy, reducing administrative processing times by 65%.
              </li>
              <li>
                Coordinate executive scheduling, board calendars, room allocations, and remote departmental video setups with zero scheduling overlaps.
              </li>
              <li>
                Process weekly intake forms and conduct strict audits on database entries, ensuring 100% compliance with state client privacy regulations.
              </li>
              <li>
                Audit monthly compliance budgets, track vendor supply lines, manage purchase orders, and reconcile monthly operational expense ledgers.
              </li>
              <li>
                Drafted a comprehensive "Remote Office Operational Guide" and onboarded and trained 8 junior administrative assistants.
              </li>
            </ul>
          </div>

          {/* Role 2 */}
          <div className="experience-item">
            <span className="exp-date">2008 – 2015</span>
            <h3 className="exp-title">Office Administrator</h3>
            <div className="exp-company">Richmond Corporate Partners &bull; Richmond, VA</div>
            <ul className="exp-details">
              <li>
                Served as the initial point of contact, routing multi-line calls, greeting corporate clients, and managing incoming and outgoing correspondence.
              </li>
              <li>
                Designed and maintained a physical/digital filing structure that standardizes client document indexing, cutting average lookup times by 80%.
              </li>
              <li>
                Compiled daily operational summaries, prepared agendas for shareholder meetings, and managed company conference room reservations.
              </li>
              <li>
                Liaised with external vendors to manage inventory logs, office supply procurement, and maintenance scheduling for office machinery.
              </li>
              <li>
                Resolved billing escalations with corporate accounts and processed purchase approvals through QuickBooks.
              </li>
              <li>
                Trained all incoming administrative staff on front-desk protocols, phone lines, and billing filing systems.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="card">
        <h2 style={{ marginBottom: '25px' }}>
          Academic Qualifications
        </h2>

        <div className="experience-timeline">
          <div className="experience-item">
            <span className="exp-date">2002 – 2006</span>
            <h3 className="exp-title">Bachelor of Science in Business Administration</h3>
            <div className="exp-company">Virginia Commonwealth University (VCU) &bull; Richmond, VA</div>
            <ul className="exp-details">
              <li>
                <strong>Focus Area:</strong> Business Management, Office Administration, and Organizational Communication.
              </li>
              <li>
                <strong>Relevant Studies:</strong> Corporate Systems, Administrative Design, Business Logistical Planning, and Database Theory.
              </li>
              <li>
                <strong>Activities:</strong> VCU Business Leadership Society, Richmond Volunteer Literacy Program.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="card">
        <h2 style={{ marginBottom: '20px' }}>Administrative Competencies & Software Matrix</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            <div style={{ padding: '15px', backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--primary)' }}>Administrative Mastery</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Office workflow optimization, client intake filing, multi-departmental schedule management, audit preparation, training manuals.
              </p>
            </div>
            
            <div style={{ padding: '15px', backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--primary)' }}>Software & Database Proficiency</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Microsoft Office Suite (Advanced Excel pivot tables, Outlook calendar sharing, Word mail merge), SharePoint, MS Access, OneDrive, Adobe Acrobat Pro.
              </p>
            </div>

            <div style={{ padding: '15px', backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--primary)' }}>Finance & Vendor Operations</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                QuickBooks Online, supply chains, par level inventory audits, vendor diplomacy, reconciliation logs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
