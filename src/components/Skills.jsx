export default function Skills() {
  const categories = [
    {
      num: 'i',
      name: 'Backend',
      sub: 'Server · API · Auth',
      items: [
        { name: 'Java', level: 'Core' },
        { name: 'Spring Boot', level: 'Core' },
        { name: 'REST API', level: 'Core' },
        { name: 'Spring Security / JWT', level: 'Built' },
        { name: 'JPA / QueryDSL', level: 'Built' },
        { name: 'MyBatis', level: 'Used' },
        { name: 'Swagger', level: 'Used' },
      ],
    },
    {
      num: 'ii',
      name: 'Frontend',
      sub: 'UI · State · API',
      items: [
        { name: 'React', level: 'Core' },
        { name: 'JavaScript', level: 'Core' },
        { name: 'React Query', level: 'Used' },
        { name: 'Zustand / Redux Toolkit', level: 'Used' },
        { name: 'Axios', level: 'Used' },
        { name: 'Vite', level: 'Used' },
      ],
    },
    {
      num: 'iii',
      name: 'Data & Integration',
      sub: 'Database · Cache · External API',
      items: [
        { name: 'MySQL', level: 'Core' },
        { name: 'Oracle', level: 'Used' },
        { name: 'Redis', level: 'Built' },
        { name: 'SQL / ERD', level: 'Core' },
        { name: 'Toss Payments API', level: 'Used' },
        { name: 'OpenAI / LangChain', level: 'Used' },
      ],
    },
    {
      num: 'iv',
      name: 'Infra & DevOps',
      sub: 'Cloud · Deploy · Workflow',
      items: [
        { name: 'AWS EC2 / ALB', level: 'Built' },
        { name: 'S3 / CloudFront', level: 'Built' },
        { name: 'Route 53 / SSM', level: 'Used' },
        { name: 'Docker Compose', level: 'Built' },
        { name: 'Jenkins CI/CD', level: 'Built' },
        { name: 'Git / GitHub', level: 'Core' },
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

        <div className="skills-grid">
          {categories.map((c) => (
            <div className="skill-card" key={c.name}>
              <div className="head">
                <div>
                  <div className="cat-name">{c.name}</div>
                  <div className="cat-sub">{c.sub}</div>
                </div>
                <div className="cat-num">{c.num}</div>
              </div>

              <ul className="skill-list">
                {c.items.map((it) => (
                  <li key={it.name}>
                    <span className="name">{it.name}</span>
                    <span className="level">{it.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}