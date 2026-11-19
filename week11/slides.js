const slides = [
  {
    "tag": "Week 11 / November 20, 2026",
    "theme": "launch-cover week11-cover",
    "content": [
      "Campaign response &amp; brand message",
      "Compare your campaign goal with its first seven days. Use what you learn to make one branding decision.",
      null,
      null
    ],
    "showStartButton": false
  },
  {
    "tag": "Case study / Sonic the Hedgehog",
    "theme": "ink week11-case",
    "content": [
      "Make Sonic recognizable again",
      "Fans singled out the human-like teeth and proportions in the first trailer. The redesign brought back familiar cues, including larger eyes and white gloves.",
      [
        [
          "First trailer",
          "About 77,000 likes and 94,000 dislikes."
        ],
        [
          "Revised trailer",
          "Over 625,000 likes and about 9,000 dislikes."
        ]
      ],
      "Each count is a release-day snapshot. The reports measured at different times."
    ],
    "showStartButton": false
  },
  {
    "tag": "Case study / Moving to Mars",
    "theme": "chalk week11-case",
    "content": [
      "Show families what they can do",
      "The Design Museum helped parents see what their children could do at the exhibition before deciding to visit.",
      [
        [
          "Preview the experience",
          "Children could start a Mars mission at home through Instagram Stories."
        ],
        [
          "Use visitor feedback",
          "Final ads included visitor and press reactions and a last-call message."
        ]
      ],
      "The museum reported over 82,000 visitors, 9% above target across the campaign."
    ],
    "showStartButton": false
  },
  {
    "tag": "Team activity / Seven-day review",
    "theme": "chalk",
    "content": [
      "Analyze the first seven days",
      "Open your team’s Week 10 goal and the post you shared. Complete the results sheet in FigJam.",
      [
        [
          "Campaign results",
          "Record what the audience did, using the measure in your goal."
        ],
        [
          "Classmate feedback",
          "Use the separate field for comments from the anonymous class form. The comments can help explain what was clear or unclear."
        ]
      ],
      null
    ],
    "showStartButton": false,
    "link": [
      "Open team FigJam",
      "https://www.figma.com/board/Yw6pMHOU0C8249uIlhQrOq/Media-Business-and-Start-up?node-id=6-416"
    ]
  },
  {
    "tag": "Team activity / Measurement",
    "theme": "ink",
    "content": [
      "Show how you checked it",
      "Record the screen or report you used and the dates or filters you applied.",
      [
        [
          "Social posts",
          "Open the published post’s analytics and note the label and period shown."
        ],
        [
          "Websites",
          "Filter for the relevant seven days, page or referring channel, and record the measure that matches your goal."
        ],
        [
          "Polls and messages",
          "Count votes or qualifying inquiries during that week. For a percentage, show the numerator and denominator."
        ]
      ],
      "Use zero for a measured zero. Mark a metric as unavailable if you cannot check it or isolate the period."
    ],
    "showStartButton": false
  },
  {
    "tag": "Team activity / Brand decision",
    "theme": "chalk",
    "content": [
      "Make one brand change",
      "Choose the change your evidence supports. Set the original beside the new version in FigJam.",
      [
        [
          "The offer was unclear",
          "Rewrite the first line or show a concrete example of what you make."
        ],
        [
          "The experience was hard to picture",
          "Show one person doing something and what happens next."
        ],
        [
          "People understood it",
          "Keep the cue they remembered and show where you will reuse it."
        ]
      ],
      "Name the campaign result or classmate comment that guided your change. Explain how the change helps the original goal."
    ],
    "showStartButton": false
  },
  {
    "tag": "Team presentations / Two minutes each",
    "theme": "signal",
    "content": [
      "Show the result and the change",
      "Present from the same FigJam board your team used for the activity.",
      [
        [
          "Goal and result",
          "What did you aim for, and what actually happened in the first seven days?"
        ],
        [
          "How you checked",
          "Show the report, filters or manual count. Label any classmate feedback you used."
        ],
        [
          "Before and after",
          "Show both versions, explain what changed and why, and say where you will reuse the element."
        ]
      ],
      null
    ],
    "showStartButton": false
  }
];

const visuals = {
  "Case study / Sonic the Hedgehog": "<figure class=\"visual case-figure\"><img class=\"case-image\" src=\"https://s.abcnews.com/images/US/sonic-the-hedgehog-old-new-comparison-ht-jc-191112_hpEmbed_11x9_992.jpg\" alt=\"Paramount trailer stills. The revised Sonic is above the original.\"><div class=\"case-figures\"><div><strong>45%</strong><span>First trailer</span></div><div><strong>99%</strong><span>Revised trailer</span></div></div><figcaption>Approximate share of recorded likes and dislikes that were likes. Counts from <a href=\"https://www.cartoonbrew.com/feature-film/the-new-sonic-the-hedgehog-trailer-doesnt-get-the-reaction-paramount-hoped-for-173426.html\" target=\"_blank\" rel=\"noopener noreferrer\">Cartoon Brew</a> and <a href=\"https://www.1news.co.nz/2019/11/13/updated-sonic-the-hedgehog-revealed-in-movie-trailer-after-fan-backlash-led-to-redesign/\" target=\"_blank\" rel=\"noopener noreferrer\">1News</a>. Still comparison via <a href=\"https://abcnews.com/entertainment/fans-fawn-updated-sonic-hedgehog-character-design/story?id=66940796\" target=\"_blank\" rel=\"noopener noreferrer\">ABC News</a>.</figcaption></figure>",
  "Case study / Moving to Mars": "<figure class=\"visual case-figure\"><img class=\"case-image\" src=\"https://designmuseum.org/image/65e12f50-1320-4422-a53c-b4601fddbeaa?height=480&amp;width=900\" alt=\"Final-week Moving to Mars campaign artwork\"><div class=\"case-figures\"><div><strong>38%</strong><span>Admission income from families</span></div><div><strong>&lt;3%</strong><span>Museum exhibition average</span></div></div><figcaption>The museum’s reported family share for the exhibition. <a href=\"https://designmuseum.org/moving-to-mars\" target=\"_blank\" rel=\"noopener noreferrer\">Campaign report</a> and <a href=\"https://designmuseum.org/exhibitions/moving-to-mars/your-mission-starts-here\" target=\"_blank\" rel=\"noopener noreferrer\">Family Trail</a>.</figcaption></figure>",
  "Team activity / Seven-day review": "<div class=\"visual evidence-sheet\"><h2>Campaign results</h2><dl><dt>Post or website</dt><dd>What did you check?</dd><dt>Date range</dt><dd>Which seven days did you measure?</dd><dt>Goal and metric</dt><dd>What action did you want? Include the unit.</dd><dt>Target and actual</dt><dd>Write both. Did you reach the goal?</dd><dt>How you checked</dt><dd>Name the report, filter or manual count.</dd></dl></div>"
};
