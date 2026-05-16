export default function Skills() {
  const categories = [
    {
      icon: '💻',
      name: 'Language',
      items: [
        { name: 'Java', color: '#ef4444' },
        { name: 'JavaScript', color: '#eab308' },
        { name: 'Python', color: '#3b82f6' },
        { name: 'SQL', color: '#10b981' },
      ],
    },
    {
      icon: '⚙️',
      name: 'Backend',
      items: [
        { name: 'Spring Boot', color: '#22c55e' },
        { name: 'Spring Security / JWT', color: '#16a34a' },
        { name: 'JPA / QueryDSL', color: '#15803d' },
        { name: 'MyBatis', color: '#a16207' },
        { name: 'REST API', color: '#6366f1' },
        { name: 'Session', color: '#ec4899' },
      ],
    },
    {
      icon: '🎨',
      name: 'Frontend',
      items: [
        { name: 'React', color: '#06b6d4' },
        { name: 'React Query', color: '#f43f5e' },
        { name: 'Zustand', color: '#f97316' },
        { name: 'Axios', color: '#8b5cf6' },
        { name: 'Thymeleaf', color: '#10b981' },
        { name: 'HTML / CSS', color: '#e85d04' },
      ],
    },
    {
      icon: '🤖',
      name: 'AI · Data & Integration',
      items: [
        { name: 'MySQL', color: '#3b82f6' },
        { name: 'Oracle', color: '#ef4444' },
        { name: 'Redis', color: '#dc2626' },
        { name: 'Toss Payments API', color: '#6366f1' },
        { name: 'OpenAI API', color: '#10b981' },
        { name: 'LangChain', color: '#a855f7' },
      ],
    },
    {
      icon: '🚀',
      name: 'Infra & DevOps',
      items: [
        { name: 'AWS EC2 / ALB', color: '#f97316' },
        { name: 'S3 / CloudFront', color: '#fb923c' },
        { name: 'Docker Compose', color: '#2563eb' },
        { name: 'Jenkins CI/CD', color: '#ef4444' },
        { name: 'Blue/Green Deploy', color: '#06b6d4' },
        { name: 'Git / GitHub', color: '#6b7280' },
        { name: 'Vercel', color: '#18181b' },
      ],
    },
  ]

  return (
    <section className="skills-section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="num">02</span>
          <h2>Tech Stack</h2>
          <span className="meta">— What I build with</span>
        </div>

        <div className="skill-box">
          {categories.map((cat) => (
            <div key={cat.name} className="skill-row">
              <div className="skill-cat-label">
                <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1814' }}>{cat.name}</span>
              </div>
              <div className="skill-badges">
                {cat.items.map((item) => (
                  <span key={item.name} style={{
                    background: item.color,
                    color: '#ffffff',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}