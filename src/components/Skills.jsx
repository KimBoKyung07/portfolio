export default function Skills() {
  const categories = [
    {
      name: 'Language',
      items: [
        { name: 'Java', color: '#9b2335' },
        { name: 'JavaScript', color: '#92720a' },
        { name: 'Python', color: '#1e4d8c' },
        { name: 'SQL', color: '#1a6b4a' },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Spring Boot', color: '#1a5c32' },
        { name: 'Spring Security / JWT', color: '#145228' },
        { name: 'JPA / QueryDSL', color: '#0f4020' },
        { name: 'MyBatis', color: '#7a5200' },
        { name: 'REST API', color: '#3b3ea0' },
        { name: 'Session', color: '#943060' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'React', color: '#0a7a96' },
        { name: 'React Query', color: '#a01830' },
        { name: 'Zustand', color: '#b55a10' },
        { name: 'Axios', color: '#5b3a9e' },
        { name: 'Thymeleaf', color: '#1a6b4a' },
        { name: 'HTML / CSS', color: '#a03800' },
      ],
    },
    {
      name: 'AI · Data & Integration',
      items: [
        { name: 'MySQL', color: '#1e4d8c' },
        { name: 'Oracle', color: '#9b2335' },
        { name: 'Redis', color: '#8c1a1a' },
        { name: 'Toss Payments API', color: '#3b3ea0' },
        { name: 'OpenAI API', color: '#1a6b4a' },
        { name: 'LangChain', color: '#6b2e9e' },
      ],
    },
    {
      name: 'Infra & DevOps',
      items: [
        { name: 'AWS EC2 / ALB', color: '#b55a10' },
        { name: 'S3 / CloudFront', color: '#8c4510' },
        { name: 'Docker Compose', color: '#1a3d8c' },
        { name: 'Jenkins CI/CD', color: '#8c1a1a' },
        { name: 'Blue/Green Deploy', color: '#0a7a96' },
        { name: 'Git / GitHub', color: '#3d3d3d' },
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