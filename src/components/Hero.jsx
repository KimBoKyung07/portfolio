export default function Hero() {
  const stats = [
    {
      num: <><span className="accent">2</span></>,
      label: 'Team Projects',
      idx: '01',
    },
    {
      num: <>Order<span className="accent">.</span></>,
      label: 'Payment Flow',
      idx: '02',
    },
    {
      num: <>Admin<span className="accent">.</span></>,
      label: 'Ops Logic',
      idx: '03',
    },
    {
      num: <>CI<span className="accent">/</span>CD</>,
      label: 'AWS Deploy',
      idx: '04',
    },
  ]

  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="top">
      <div>
        <div className="eyebrow">
          <span className="line"></span>
          Portfolio · 2026
        </div>

        <h1>
          김보경<br />
          <span className="italic">Backend</span>{' '}
          <span style={{ color: 'var(--ink-mute)', fontStyle: 'italic' }}>&</span> Infra
        </h1>

        <div className="role">
          Backend-focused Full-stack Developer · 백엔드 중심 풀스택 개발자
        </div>

        <p className="intro">
          주문·결제·인증·정산처럼 흐름이 끊기면 안 되는 기능을<br />
          Spring Boot와 React로 구현하고,<br />
          AWS · Docker · Jenkins로 배포 자동화까지 연결합니다.
        </p>

        <a href="#projects" className="btn-primary" onClick={scrollToProjects}>
          <span>View Projects</span>
          <span className="arr"></span>
        </a>
      </div>

      <div className="hero-stats" aria-label="Highlights">
        {stats.map(({ num, label, idx }) => (
          <div className="stat" key={label}>
            <span className="corner">{idx}</span>
            <div className="num">{num}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="v-line"></span>
      </div>
    </section>
  )
}