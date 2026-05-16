export default function Contact() {
  const email = 'dev.bokyungkim@gmail.com'

  const cards = [
    {
      kind: 'Resume',
      val: '이력서 PDF 다운로드',
      href: '/resume.pdf',
      download: '김보경_이력서.pdf',
    },
    {
      kind: 'Cover Letter',
      val: '자기소개서 PDF 열람',
      href: '/coverLetter.pdf',
      external: true,
    },
    {
      kind: 'GitHub',
      val: 'github.com/KimBoKyung07',
      href: 'https://github.com/KimBoKyung07',
      external: true,
    },
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="num">04</span>
          <h2>Contact</h2>
          <span className="meta">— Let’s talk</span>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-lead">
              <span style={{color: '#ffffff'}}>안정적인 서비스 흐름을 </span>
              <span>함께</span><span style={{ color: '#ffffff' }}>  만드는 개발자로 기여하고 싶습니다.</span>
            </div>

            <p className="contact-sub">
              백엔드 · 풀스택 포지션을 준비하고 있습니다.
              프로젝트와 이력서를 확인하신 뒤 편하게 연락 주세요.
            </p>

            <a className="contact-email" href={`mailto:${email}`}>
              {email} <span>↗</span>
            </a>
          </div>

          <div className="contact-cards">
            {cards.map((c) => (
              <a
                key={c.kind}
                className="contact-card"
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                download={c.download || undefined}
              >
                <div className="left">
                  <span className="kind">{c.kind}</span>
                  <span className="val">{c.val}</span>
                </div>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}