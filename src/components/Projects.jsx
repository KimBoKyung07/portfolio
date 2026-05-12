export default function Projects() {
  const projects = [
    {
      num: '01',
      kind: 'Final Project',
      period: '2026.04 — 2026.05',
      role: 'BE · FE · Infrastructure',
      focus: 'Admin Ops · CI/CD',
      tags: [
        'Spring Boot',
        'Security/JWT',
        'QueryDSL',
        'Redis',
        'React',
        'AWS',
        'Docker',
        'Jenkins',
      ],
      title: 'Smart Parking Control Platform',
      subtitle: '무중단 통합 스마트 복합 주차관제 웹서비스',
      desc:
        'AI 번호판 인식, 상가 할인, Toss 결제, 실시간 주차공간 관리를 하나로 연결한 복합 주차관제 서비스입니다. 저는 관리자 인증/운영 기능과 배포 자동화를 중심으로 담당했습니다.',
      points: [
        '관리자 전용 SecurityFilterChain 분리 및 JWT/Redis 기반 인증·재발급 흐름 구현',
        'QueryDSL 기반 입출차 기록 요약, 차량번호 검색, 상태 필터, 페이징, 상세 모달 구현',
        '강제출차·할인수정 시 결제 요청, 주차세션, 주차공간 상태를 함께 정리하는 정합성 로직 구현',
        'B1/B2 층별 주차공간 현황 조회, 60초 polling, BLOCK/EV/장애인석 구획 제어 구현',
        'AWS, Docker Compose, Jenkins 기반 CI/CD 및 Blue/Green 배포 환경 구성',
      ],
      impact:
        '운영자 조치 이후 paymentStatus, parkingStatus, parkingSpace 상태가 한 시점 기준으로 정리되도록 설계해 후속 정산 오류와 화면 불일치를 줄였습니다.',
      note:
        '관리자 페이지는 일부 기능 확인 시 로그인 권한이 필요할 수 있습니다.',
      links: [
        {
          label: 'Live Admin',
          href: 'https://admin.parking-system.store/',
          primary: true,
        },
        {
          label: 'Live User',
          href: 'https://user.parking-system.store/',
          primary: true,
        },
        {
          label: 'Live Kiosk',
          href: 'https://kiosk.parking-system.store/',
          primary: true,
        },
        {
          label: 'Team Repo',
          href: 'https://github.com/dbsekdgh-dotcom/Final_Project_parking_system.git',
        },
        {
          label: 'Swagger',
          href: 'https://parking-system.store/swagger-ui/index.html?urls.primaryName=2.+%EA%B4%80%EB%A6%AC%EC%9E%90%EC%9A%A9+%28Admin%29',
        },
        {
          label: 'PPT',
          href: 'https://docs.google.com/presentation/d/1kPurO5D2lqZ2k4GOtXRiuvkUT1D_MReH/edit?usp=drive_link&ouid=100019215894379273084&rtpof=true&sd=true',
        },
      ],
    },
    {
      num: '02',
      kind: 'Semi Project',
      period: '2026.01',
      role: 'BE · FE',
      focus: 'Order · Payment Flow',
      tags: [
        'Spring MVC',
        'Session',
        'MyBatis',
        'Oracle',
        'Thymeleaf',
        'Toss Payments',
      ],
      title: 'Fanmerce Hub',
      subtitle: '팬덤 콘텐츠와 MD 커머스를 연결하는 플랫폼',
      desc:
        '음악/아티스트 관련 MD 쇼핑몰 플랫폼입니다. 상품 조회부터 장바구니, 주문서 작성, Toss Payments 결제, 마이페이지 주문 관리, 구매확정 기반 후기 작성까지 이어지는 사용자 구매 흐름을 담당했습니다.',
      points: [
        'Session 기반 로그인 페이지 및 사용자 인증 흐름 구현',
        '상품 목록, 카테고리, 아티스트별, 검색 조회 및 상품 상세 옵션/수량 선택 구현',
        '장바구니 담기, 수량 변경, 선택 상품 삭제, 바로 주문/장바구니 주문 흐름 구현',
        'Toss Payments 테스트 결제 UI 연동 및 결제 성공/실패 흐름 처리',
        '주문내역, 주문상세, 주문취소, 구매확정, 후기 작성/중복 방지/이미지 업로드 구현',
      ],
      impact:
        '주문 상태와 구매확정 여부에 따라 가능한 기능이 달라지는 상태 기반 비즈니스 로직을 구현하며 단순 CRUD 이상의 커머스 흐름을 경험했습니다.',
      links: [
        {
          label: 'Team Repo',
          href: 'https://github.com/janguk-Hwang/semi-project.git',
        },
        {
          label: 'PPT',
          href: 'https://docs.google.com/presentation/d/1dJkGmuMNDhMr20llrik7ezsEDXVk3bl4/edit?usp=drive_link&ouid=100019215894379273084&rtpof=true&sd=true',
        },
      ],
    },
  ]

  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="num">03</span>
        <h2>Selected Work</h2>
        <span className="meta">— Team Projects</span>
      </div>

      <div className="projects-list">
        {projects.map((p) => (
          <article className="project" key={p.num}>
            <div className="proj-body">
              <div className="proj-meta">
                <span className="num">{p.num}</span>

                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="proj-title">{p.title}</h3>

              {p.subtitle && (
                <p className="proj-subtitle">{p.subtitle}</p>
              )}

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-highlights">
                {[
                  { k: 'Type', v: p.kind },
                  { k: 'Period', v: p.period },
                  { k: 'Role', v: p.role },
                  { k: 'Focus', v: p.focus },
                ].map((h) => (
                  <div className="hl" key={h.k}>
                    <span className="k">{h.k}</span>
                    <span className="v">{h.v}</span>
                  </div>
                ))}
              </div>

              {p.points && (
                <ul className="proj-points">
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {p.impact && (
                <p className="proj-impact">{p.impact}</p>
              )}

              {p.note && (
                <p className="proj-note">{p.note}</p>
              )}

              <div className="proj-links">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    className={`proj-link ${l.primary ? 'live' : ''}`}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="glyph">↗</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}