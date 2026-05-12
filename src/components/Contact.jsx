export default function Contact() {
  const email = 'qhzud1207@naver.com'

  // Notion 이력서 완성 후 여기에 실제 공유 링크를 넣으면 됩니다.
  const notionResumeUrl = ''

  // public/resume/kim-bokyung-resume-public.pdf 위치에 파일을 두면 됩니다.
  const resumePdfPath = '/resume/kim-bokyung-resume-public.pdf'

  const cards = [
    notionResumeUrl && {
      kind: 'Resume',
      val: '노션 이력서 열람',
      href: notionResumeUrl,
      external: true,
    },
    {
      kind: 'PDF',
      val: '이력서 PDF 다운로드',
      href: resumePdfPath,
      download: '김보경_이력서.pdf',
    },
  ].filter(Boolean)

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
              <span className="italic">함께</span> 안정적인 서비스를<br />
              만들 기회를 찾고 있습니다.
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