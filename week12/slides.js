// Documented field-research applications: one case per slide.
const slides = [
  {
    "tag": "Case 01 / Airbnb · New York · 2009",
    "showStartButton": false,
    "content": [
      "Airbnb: visit the hosts.",
      "Growth had stalled. Poor listing photos led the founders to visit New York hosts and observe how they used Airbnb.",
      [
        [
          "Why go?",
          "Poor photos made listings hard to assess; the team went to New York to help hosts."
        ],
        [
          "In the field",
          "Re-photographed rooms, talked with hosts and watched them use the website."
        ],
        [
          "What they learned",
          "Hosts struggled with basic tasks, including calendar updates; the team had missed these usability problems."
        ],
        [
          "What changed",
          "Uploaded new photos and quickly implemented hosts’ feedback, including calendar improvements."
        ]
      ],
      "Gebbia reported weekly revenue rising from $200 to $400 after the visits, photo work and product updates."
    ],
    "link": [
      "Accounts: Paul Graham / Y Combinator",
      "https://www.ycombinator.com/blog/the-airbnbs"
    ],
    "ko": "성장이 정체된 Airbnb는 숙소 사진이 좋지 않다는 단서를 바탕으로 뉴욕의 호스트를 직접 방문했습니다. 사진을 새로 찍고 대화하는 동안 호스트가 웹사이트를 사용하는 모습을 관찰했습니다. 달력 수정 등 기본 작업에서도 팀이 예상하지 못한 사용 문제를 발견했고, 새 사진을 올리는 동시에 피드백을 서비스 개선에 반영했습니다. 이는 현장에서 고객의 실제 사용 과정을 보고 개선으로 연결한 사례입니다. 매출 증가는 방문·사진 작업·제품 개선 이후의 창업자 회고이며, 사진만의 효과를 분리한 결과는 아닙니다."
  },
  {
    "tag": "Case 02 / Unilever + WSUP + IDEO.org · Clean Team · Before 2012 launch",
    "content": [
      "Clean Team: test the service at home.",
      "In Kumasi, Ghana, households pay a monthly fee for a rented toilet and regular waste collection.",
      [
        [
          "Why go?",
          "Would families pay for collection and accept staff entering their homes?"
        ],
        [
          "In the field",
          "Interviewed residents, shadowed an operator and tested toilets in homes."
        ],
        [
          "What they learned",
          "Initially, people preferred to save money by emptying toilets themselves; home trials revealed the value of collection."
        ],
        [
          "What changed",
          "Refined the collection service and piloted it with about 100 families before launch."
        ]
      ],
      "Paid trial · Nov 2011: ~60 households subscribed at GHS 15/month, including twice-weekly collection. Public toilets could cost a five-person family up to GHS 45/month."
    ],
    "link": [
      "Original project process: IDEO.org / Design Kit",
      "https://www.designkit.org/case-studies/1.html"
    ],
    "ko": "Clean Team은 가나 쿠마시에서 변기 임대와 정기적인 배설물 수거를 묶어 월 이용료를 받는 위생 서비스입니다. 조사팀은 수거를 이미 고려하고 있었지만, 주민들은 처음에는 비용을 아끼려고 직접 처리하겠다고 했습니다. 집에서 시제품을 사용한 뒤에는 처리 부담을 체감하며 수거의 가치를 느꼈습니다. WSUP의 2011년 11월 초기 실증 자료에는 약 60가구가 가입했고, 월 15세디에 주 2회 수거가 포함됐다고 나옵니다. 당시 5인 가족의 공중화장실 비용은 월 최대 45세디여서 일부 가구에는 기존 지출을 대체하는 선택지가 될 수 있었습니다. 이후 출시 전 약 100가구에서 시범 운영했습니다. 현장조사에서 찾은 필요를 유료 서비스 가입과 반복 매출 모델로 연결한 사례입니다. 영상은 00:00–02:13 전체를 시청하면 됩니다."
  },
  {
    "tag": "Case 03 / Crowne Plaza + IDEO · Live hotel pilot · Reported 2016",
    "content": [
      "Crowne Plaza: measure the lobby in use.",
      "Before extending a new hotel workspace concept, IDEO tested it in operating hotels with business travellers.",
      [
        [
          "Why go?",
          "Would guests use the new workspace, at what times and for how long?"
        ],
        [
          "In the field",
          "Interviewed and observed guests; compared original and redesigned lobbies using sensors."
        ],
        [
          "What they learned",
          "Group spaces had 20–35-minute visits, including previously quiet periods."
        ],
        [
          "What changed",
          "Validated the layout and the need for fast ordering and drink delivery."
        ]
      ],
      "First test site: 79% more people passed through; 80% more people sat down. These are the published pilot comparisons."
    ],
    "link": [
      "Researchers’ account and actual equipment",
      "https://www.ideo.com/journal/catching-ghosts"
    ],
    "ko": "새 업무 공간을 확대하기 전에 실제 운영 중인 호텔에서 기존 로비와 변경된 로비를 비교했습니다. 인터뷰·관찰에 더해 좌석·근접·동선 센서로 이용 시간과 체류를 측정했습니다. 짧은 회의와 비어 있던 시간대의 이용을 확인했고, 공간 구성뿐 아니라 주문과 음료 제공이 빨라야 한다는 운영 요구를 구체화했습니다."
  },
  {
    "tag": "Case 04 / GE Healthcare · Adventure Series · Designer’s account, 2012",
    "content": [
      "GE: redesign the child’s scan experience.",
      "A hospital visit showed designer Doug Dietz that a functioning scanner could still create a frightening experience.",
      [
        [
          "Why go?",
          "On a hospital visit, Dietz saw a frightened child and family."
        ],
        [
          "In the field",
          "Considered the child’s perspective; worked with children and hospital specialists."
        ],
        [
          "What they learned",
          "Equipment, noise, surroundings and instructions all contributed to fear."
        ],
        [
          "What changed",
          "Created themed rooms, equipment graphics and stories to guide the scan."
        ]
      ],
      "The design scope expanded from the scanner’s enclosure to the experience delivered by the hospital."
    ],
    "link": [
      "GE product and experience documentation",
      "https://www.gehealthcare.com/en-us/products/imaging-accessories/adventure-series"
    ],
    "ko": "장비가 정상 작동해도 실제 이용 경험은 두려울 수 있었습니다. 병원에서 아이와 가족의 반응을 본 디자이너는 아이의 눈높이에서 공간과 안내를 다시 살펴보고, 어린이·병원 직원·어린이박물관 전문가와 함께 작업했습니다. 장비 외형을 넘어 공간 그래픽과 이야기, 직원의 안내를 포함하는 검사 경험으로 설계 범위가 넓어졌습니다."
  },
  {
    "tag": "Case 05 / Cooper Hewitt + Tellart · On-site operational testing · 2015 experience",
    "content": [
      "Cooper Hewitt: test the museum workflow.",
      "Before deploying the Pen, the museum had to connect the visitor device to admission and everyday front-desk work.",
      [
        [
          "Why go?",
          "How would staff distribute Pens, pair tickets and guide visitors?"
        ],
        [
          "In the setting",
          "Tested several operational approaches in the real museum environment."
        ],
        [
          "What they learned",
          "Pairing and guidance had to fit existing front-desk responsibilities."
        ],
        [
          "What changed",
          "Built ticket-pairing electronics, administrative tools and a distribution process."
        ]
      ],
      "An operational field pilot: the device’s design and the venue’s delivery process had to work together."
    ],
    "link": [
      "Design and testing account: Cooper Hewitt",
      "https://www.cooperhewitt.org/new-experience/designing-pen/"
    ],
    "ko": "펜을 배포하기 전에 실제 미술관에서 티켓·기기 연결과 안내 과정을 여러 방식으로 시험했습니다. 관객에게 기기를 주는 작업은 입장 응대와 함께 돌아가야 했습니다. 그 결과 티켓 연결 전자 장치와 관리 도구, 배포 과정이 구체화됐습니다. 이는 관객 행동을 관찰하는 조사와 구분되는 현장 운영 파일럿 사례입니다."
  },
  {
    "tag": "Case 06 / GOV.UK Notify · Workplace observation · 2018",
    "content": [
      "Notify: watch the work around the screen.",
      "After launch, researchers investigated a use case that early development had given little attention: one-off messages during phone calls.",
      [
        [
          "Why go?",
          "Understand message-sending during calls, beyond what a lab test could show."
        ],
        [
          "In the field",
          "Visited service teams, observed their normal work and listened to calls."
        ],
        [
          "What they learned",
          "Phones were locked away during shifts, making SMS login impossible for some staff."
        ],
        [
          "What changed",
          "Released email authentication; a faster messaging interface was still in development."
        ]
      ],
      "The released authentication change addressed a workplace condition, not a lack of user skill."
    ],
    "link": [
      "Research team’s original account",
      "https://userresearch.blog.gov.uk/2018/06/12/how-were-using-contextual-research-to-improve-gov-uk-notify/"
    ],
    "ko": "출시 후 실제 업무 현장을 방문해 전화 응대와 문자 발송을 함께 관찰했습니다. 일부 직원은 휴대폰을 사물함에 보관해야 해서 문자 인증으로 로그인할 수 없었습니다. 이에 이메일 인증을 도입했습니다. 빠른 개별 발송 인터페이스는 당시 개발 중이었으므로 이미 완료된 개선과 구분합니다."
  }
];
const visuals = {
  "Case 01 / Airbnb · New York · 2009": "<div class=\"visual case-media\"><figure class=\"field-video\"><div class=\"video-shell\"><iframe src=\"https://www.youtube-nocookie.com/embed/TCA_7RVo7Uo\" title=\"Joe Gebbia and Reid Hoffman: Scaling Product at Airbnb\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen\" allowfullscreen referrerpolicy=\"strict-origin-when-cross-origin\"></iframe></div><figcaption>Y Combinator · founder interview, 2017.<br><strong>Watch 03:01–05:50</strong> · Host visits and usability problems.<br><strong>Then 08:13–10:33</strong> · Field research, improvements and results.<br>Total viewing: 5 min 9 sec. <a href=\"https://www.ycombinator.com/blog/scaling-product-airbnb\" target=\"_blank\" rel=\"noopener noreferrer\">Video source</a></figcaption></figure><figure class=\"field-photo media-short\"><button type=\"button\" class=\"image-open\" data-image=\"media/airbnb-gebbia.png\" data-alt=\"Airbnb co-founder Joe Gebbia\" data-credit=\"Joe Gebbia · interview portrait, not a photograph of the 2009 visits.\" aria-label=\"Enlarge: Airbnb co-founder Joe Gebbia\"><img src=\"media/airbnb-gebbia.png\" alt=\"Airbnb co-founder Joe Gebbia\"></button><figcaption>Joe Gebbia · interview portrait, not a photograph of the 2009 visits. <a href=\"https://review.firstround.com/how-design-thinking-transformed-airbnb-from-failing-startup-to-billion-dollar-business/\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure></div>",
  "Case 02 / Unilever + WSUP + IDEO.org · Clean Team · Before 2012 launch": "<div class=\"visual case-media\"><figure class=\"field-video\"><div class=\"video-shell\"><iframe src=\"https://player.vimeo.com/video/57379407\" title=\"IDEO.org: Crapmap Prototyping Journey\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen\" allowfullscreen referrerpolicy=\"strict-origin-when-cross-origin\"></iframe></div><figcaption>IDEO.org · eight weeks of fieldwork and prototyping in Kumasi.<br><strong>Watch 00:00–02:13 · Full video (2 min 13 sec).</strong><br>A visual project diary; read the case text for the research findings. <a href=\"https://wsup.com/wp-content/uploads/2017/08/PN008-ENGLISH-CleanTeam.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Paid-trial evidence: WSUP, Nov 2011</a>. <a href=\"https://vimeo.com/57379407\" target=\"_blank\" rel=\"noopener noreferrer\">Video source</a></figcaption></figure><div class=\"media-pair\"><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"media/clean-team.jpg\" data-alt=\"Clean Team in-home toilet\" data-credit=\"IDEO.org · project photograph.\" aria-label=\"Enlarge: Clean Team in-home toilet\"><img src=\"media/clean-team.jpg\" alt=\"Clean Team in-home toilet\"></button><figcaption>IDEO.org · project photograph. <a href=\"https://www.ideo.org/project/clean-team\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"media/clean-team-diagram.png\" data-alt=\"Clean Team collection and treatment service diagram\" data-credit=\"IDEO.org · final service system.\" aria-label=\"Enlarge: Clean Team collection and treatment service diagram\"><img src=\"media/clean-team-diagram.png\" alt=\"Clean Team collection and treatment service diagram\"></button><figcaption>IDEO.org · final service system. <a href=\"https://www.ideo.org/project/clean-team\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure></div></div>",
  "Case 03 / Crowne Plaza + IDEO · Live hotel pilot · Reported 2016": "<div class=\"visual case-media image-case\"><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"https://cdn.prod.website-files.com/68c99b3e3a4f357e8af47a40/68d1563407f62011c1d4d449_6501e17b507eeeaff049bf2b_1657557617-image12.jpeg\" data-alt=\"The Crowne Plaza workspace tested by IDEO\" data-credit=\"IDEO · the actual redesigned hotel workspace.\" aria-label=\"Enlarge: The Crowne Plaza workspace tested by IDEO\"><img src=\"https://cdn.prod.website-files.com/68c99b3e3a4f357e8af47a40/68d1563407f62011c1d4d449_6501e17b507eeeaff049bf2b_1657557617-image12.jpeg\" alt=\"The Crowne Plaza workspace tested by IDEO\"></button><figcaption>IDEO · the actual redesigned hotel workspace. <a href=\"https://www.ideo.com/journal/catching-ghosts\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure><figure class=\"field-photo media-short\"><button type=\"button\" class=\"image-open\" data-image=\"https://cdn.prod.website-files.com/68c99b3e3a4f357e8af47a40/68d1563407f62011c1d4d418_6501e17b507eeeaff049bf29_1657557649-image14.jpeg\" data-alt=\"A proximity sensor under a pilot workspace stool\" data-credit=\"IDEO · proximity sensor under a hard plastic stool.\" aria-label=\"Enlarge: A proximity sensor under a pilot workspace stool\"><img src=\"https://cdn.prod.website-files.com/68c99b3e3a4f357e8af47a40/68d1563407f62011c1d4d418_6501e17b507eeeaff049bf29_1657557649-image14.jpeg\" alt=\"A proximity sensor under a pilot workspace stool\"></button><figcaption>IDEO · proximity sensor under a hard plastic stool. <a href=\"https://www.ideo.com/journal/catching-ghosts\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure></div>",
  "Case 04 / GE Healthcare · Adventure Series · Designer’s account, 2012": "<div class=\"visual case-media\"><figure class=\"field-video\"><div class=\"video-shell\"><iframe src=\"https://www.youtube-nocookie.com/embed/jajduxPD6H4\" title=\"Doug Dietz: Transforming healthcare for children and their families\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen\" allowfullscreen referrerpolicy=\"strict-origin-when-cross-origin\"></iframe></div><figcaption>TEDxSanJoseCA · the designer’s firsthand account, 2012. <a href=\"https://tedxsanjoseca.org/doug-dietz/\" target=\"_blank\" rel=\"noopener noreferrer\">Video source</a></figcaption></figure><figure class=\"field-photo media-short\"><button type=\"button\" class=\"image-open\" data-image=\"https://s7d9.scene7.com/is/image/gehealthcare/adventure-series-pirate-island-st-en?fmt=webp\" data-alt=\"GE Healthcare Pirate Island themed imaging room\" data-credit=\"GE HealthCare · Pirate Island, an actual Adventure Series design.\" aria-label=\"Enlarge: GE Healthcare Pirate Island themed imaging room\"><img src=\"https://s7d9.scene7.com/is/image/gehealthcare/adventure-series-pirate-island-st-en?fmt=webp\" alt=\"GE Healthcare Pirate Island themed imaging room\"></button><figcaption>GE HealthCare · Pirate Island, an actual Adventure Series design. <a href=\"https://www.gehealthcare.com/en-us/products/imaging-accessories/adventure-series\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure></div>",
  "Case 05 / Cooper Hewitt + Tellart · On-site operational testing · 2015 experience": "<div class=\"visual case-media\"><figure class=\"field-video\"><div class=\"video-shell\"><iframe src=\"https://www.youtube-nocookie.com/embed/ejIvvwmtX8M\" title=\"Cooper Hewitt: The Pen\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen\" allowfullscreen referrerpolicy=\"strict-origin-when-cross-origin\"></iframe></div><figcaption>Cooper Hewitt · official visitor instructions, 39 seconds. <a href=\"https://www.cooperhewitt.org/2015/03/05/using-the-pen/\" target=\"_blank\" rel=\"noopener noreferrer\">Video source</a></figcaption></figure><div class=\"media-pair\"><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"media/pen-table.png\" data-alt=\"The Cooper Hewitt Pen at an interactive table\" data-credit=\"Cooper Hewitt · Pen in use.\" aria-label=\"Enlarge: The Cooper Hewitt Pen at an interactive table\"><img src=\"media/pen-table.png\" alt=\"The Cooper Hewitt Pen at an interactive table\"></button><figcaption>Cooper Hewitt · Pen in use. <a href=\"https://www.cooperhewitt.org/new-experience/designing-pen/\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"media/pen-instructions.jpg\" data-alt=\"The museum’s Pen instruction card\" data-credit=\"Cooper Hewitt · visitor instructions.\" aria-label=\"Enlarge: The museum’s Pen instruction card\"><img src=\"media/pen-instructions.jpg\" alt=\"The museum’s Pen instruction card\"></button><figcaption>Cooper Hewitt · visitor instructions. <a href=\"https://labs.cooperhewitt.org/2016/museums-and-the-web-conference-recap-administrative-tools-at-cooper-hewitt/\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure></div></div>",
  "Case 06 / GOV.UK Notify · Workplace observation · 2018": "<div class=\"visual case-media notify-case\"><figure class=\"field-photo \"><button type=\"button\" class=\"image-open\" data-image=\"media/notify-screen.png\" data-alt=\"The actual GOV.UK Notify message recipient screen\" data-credit=\"GOV.UK · interface published with the 2018 field-research account.\" aria-label=\"Enlarge: The actual GOV.UK Notify message recipient screen\"><img src=\"media/notify-screen.png\" alt=\"The actual GOV.UK Notify message recipient screen\"></button><figcaption>GOV.UK · interface published with the 2018 field-research account. <a href=\"https://userresearch.blog.gov.uk/2018/06/12/how-were-using-contextual-research-to-improve-gov-uk-notify/\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a></figcaption></figure><section class=\"change-strip\" aria-label=\"Change in authentication\"><p>Workplace finding</p><strong>Phones stored in lockers</strong><p>Service response</p><strong>Email authentication added</strong></section></div>"
};
