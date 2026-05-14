export default function About() {
  const timeline = [
    {
      year: '2020 — 2025.07',
      title: '프로세스와 데이터를 다루던 경험',
      sub: '업무 흐름과 데이터 정합성의 중요성을 배웠습니다.',
      now: false,
    },
    {
      year: '2025.09',
      title: '개발자로의 전환',
      sub: '웹 개발과 Java/Spring 기반 백엔드 개발을 학습했습니다.',
      now: false,
    },
    {
      year: '2026.01',
      title: 'Fanmerce Hub',
      sub: '상품 조회, 장바구니, 주문, 결제, 후기 흐름을 구현했습니다.',
      now: false,
    },
    {
      year: '2026.04 — 2026.05',
      title: 'Smart Parking Web Service',
      sub: '관리자 인증, 입출차 관리, 강제출차, 할인수정, CI/CD를 구현했습니다.',
      now: false,
    },
    {
      year: '2026.05 — 현재',
      title: 'Backend-focused Full-stack Developer',
      sub: '운영 가능한 서비스 흐름을 만드는 개발자로 성장 중입니다.',
      now: true,
    },
  ]

  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="num">01</span>
        <h2>About</h2>
        <span className="meta">— Background</span>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            <span className="lead">복잡한 흐름을 이해하고,</span>{' '}
            그 흐름을 안정적인 서비스 로직으로 구현하는 개발자입니다.
          </p>

          <p>
            현장의 업무 프로세스와 데이터를 다루며,
            작은 오류가 전체 흐름에 영향을 줄 수 있다는 것을 경험했습니다.
            지금은 그 관점을 바탕으로 사용자 행동, 데이터 상태,
            관리자 운영이 자연스럽게 이어지는 서비스를 만들고 있습니다.
          </p>

          <p>
            주문·결제·인증·정산처럼 여러 단계가 연결되는 기능에서
            상태 변화와 예외 처리, 데이터 정합성을 중요하게 생각합니다.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map((t) => (
            <li key={`${t.year}-${t.title}`} className={`tl-item ${t.now ? 'now' : ''}`}>
              <div className="tl-year">{t.year}</div>
              <div className="tl-title">{t.title}</div>
              <div className="tl-sub">{t.sub}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}