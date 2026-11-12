const figJam = 'https://www.figma.com/board/VEX2J0NwnMC9NLmW6R6hR8/Media-Business---Startup?node-id=268-2';
const week9Module = 'https://app.notion.com/p/AI-Campaign-Channel-Planning-3d57c00fe5ad81c18421f6ed85ebdea1';
const week10Module = 'https://app.notion.com/p/Publish-on-Website-or-Social-Media-3d07c00fe5ad81b2b42ad63faa831950';
const omegaTrailer = 'https://www.youtube.com/watch?v=sMwu6CwS0jI';
const omegaVisit = 'https://meowwolf.com/visit/las-vegas';
const dreamGarden = 'https://www.dstrict.com/COMMERCIAL/?bmode=view&idx=13263730';
const severance = 'https://www.youtube.com/watch?v=QYVyTvnAsQw';
const mars = 'https://www.framestore.com/work/field-trip-mars';
const marsResults = 'https://framestorevr.com/field-trip-to-mars';
const greenKnight = 'https://shop.a24films.com/products/the-green-knight-a-fantasy-roleplaying-game';
const studies = {
  curiosity: 'https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf',
  experience: 'https://doi.org/10.1509/jmkg.73.3.052',
  sharing: 'https://doi.org/10.1509/JMR.10.0353',
  selfPresentation: 'https://doi.org/10.1509/jmr.13.0238',
  action: 'https://doi.org/10.1145/1541948.1541999',
  measurement: 'https://www.kellogg.northwestern.edu/academics-research/research/detail/2019/a-comparison-of-approaches-to-advertising-measurement-evidence-from/'
};

const slides = [
  {
    tag: "Week 10 / November 13, 2026", theme: "launch-cover",
    content: ["From first look to first action", "Last week your team chose a promotion goal and a channel, then drafted a first post. Today you’ll present your work, publish one post per team and get feedback on the live post."],
    link: ["Open Week 10 · Publish on Website or Social Media", week10Module]
  },
  {
    tag: "01 / Individual presentations", theme: "chalk",
    content: ["Show what you developed last time", "Open your team’s Week 9 work. Each person shows their contribution in 30–45 seconds.", [
      ["Promotion goal", "Who did your team want to reach, and what did you want them to know?"],
      ["Promotion channel", "Which website or social channel did you choose?"],
      ["First post draft", "Show the copy, image or short clip you helped develop. What did you change, and why?"]
    ]],
    link: ["Open Week 9 · AI Campaign &amp; Channel Planning", week9Module]
  },
  {
    tag: "02 / Team publishing", theme: "signal",
    content: ["Publish one post per team", "Use the work you just presented. If your team has several drafts, choose one to publish on your Week 9 channel.", [
      ["Before posting", "Make any quick fixes. Check the media permissions and who can see the post."],
      ["After posting", "Ask another teammate to open the direct link and try the next step. Have the live link ready for feedback."]
    ]],
    link: ["Open team FigJam", figJam]
  },
  {
    tag: "03 / Team feedback", theme: "ink",
    content: ["Review the live post together", "Open your team’s published post for the instructor. Say who it’s for and what you want them to know or do.", [
      ["First impression", "Is the project and its message clear at a glance?"],
      ["Next step", "Can the intended audience easily watch, click, reply or get in touch?"],
      ["Team takeaway", "Write down one concrete change from the feedback."]
    ]]
  },
  {
    tag: "After feedback / Section 3-2", theme: "chalk",
    content: ["Make one change and record the post", "Apply the change you agreed on if you can do it in class. Check the direct link again.", [
      ["Record", "Log the publication date, target audience and final link in section 3-2."],
      ["Next week", "Keep any available starting figures and when you checked them. We’ll review responses on November 20."]
    ]]
  },
  {
    tag: "Submission / November 19", theme: "signal",
    content: ["Two items in FigJam", "Due Thursday, November 19 at 23:59 KST. One representative submits in the team’s FigJam space.", [
      ["Published link","One direct URL that opens the actual post."],
      ["Team roles","One line per team member with their name and contribution."]
    ]],
    link: ["Open team FigJam", figJam]
  },
  {
    tag: "Reference case / Meow Wolf", theme: "ink comparison",
    content: ["One campaign, two jobs", "Watch the first 25 seconds of the 404 Chocolate commercial, then open the visit page. What does each channel help the audience discover or do?"]
  },
  {
    tag: "Reference case / Apple TV", theme: "ink media-case",
    content: ["Put the story in public", "Apple TV staged the fictional Lumon office in a glass cube at Grand Central Terminal to promote Severance Season 2.", [
      ["Creative choice","The performance lets commuters glimpse the story world. The glass cube gives viewers a frame they can capture and share."],
      ["Discuss","What in the first frame would make someone unfamiliar with the show stop?"]
    ]],
    link: ["Watch the official pop-up footage", severance]
  },
  {
    tag: "Reference case / Framestore × McCann", theme: "chalk media-case",
    content: ["Make the promise an experience", "A school bus used its windows as screens to take groups on a virtual trip to Mars.", [
      ["Creative choice","Passengers could see the terrain change and discover it together."],
      ["Discuss","How could your team give people a five-second sample of your project?"]
    ]],
    link: ["Open Framestore’s production case", mars]
  },
  {
    tag: "Reference / Attention, sharing and action", theme: "ink research",
    content: ["Why might people respond?", "Use these ideas when you discuss what to improve in your team’s post."]
  }
];

function imageCase({url, image, alt, caption, mark = '↗', fit = ''}) {
  return `<figure class="visual source-media ${fit}">
    <a class="media-preview" href="${url}" target="_blank" rel="noopener" aria-label="${caption}">
      <img src="${image}" alt="${alt}">
      <span aria-hidden="true">${mark}</span>
    </a>
    <figcaption>${caption}</figcaption>
  </figure>`;
}

const visuals = {
  'Week 10 / November 13, 2026': `<div class="visual launch-mark" aria-hidden="true">
    <div class="launch-grid"></div>
    <span>FIRST LOOK</span><b>→</b><span>FIRST ACTION</span>
  </div>`,
  '01 / Individual presentations': `<div class="visual schedule-grid">
    <section><strong>01 · Present</strong><p>Show what you developed individually.</p></section>
    <section><strong>02 · Publish</strong><p>Put one team post live.</p></section>
    <section><strong>03 · Get feedback</strong><p>Open the published post and discuss one change with the instructor.</p></section>
  </div>`,
  'Reference case / Meow Wolf': `<div class="visual case-pair"><figure class="visual source-media">
    <a class="media-preview" href="${omegaTrailer}" target="_blank" rel="noopener" aria-label="Watch Meow Wolf’s 404 Chocolate commercial">
      <img src="https://i.ytimg.com/vi/sMwu6CwS0jI/hqdefault.jpg" alt="Video preview for Meow Wolf’s 404 Chocolate commercial">
      <span aria-hidden="true">▶</span>
    </a>
    <figcaption>Meow Wolf · 404 Chocolate: Install the Flavor</figcaption>
  </figure>
<figure class="visual source-media">
    <a class="media-preview" href="${omegaVisit}" target="_blank" rel="noopener" aria-label="Open Meow Wolf’s Omega Mart visit page">
      <img src="https://cdn.prod.website-files.com/5dad7a19f43e6f31a9e92718%2F67255e97811920b93bc3e121_Vegas_Visit_Video_Trimmed-rf33-poster-00001.jpg" alt="Meow Wolf’s official visual preview for Omega Mart in Las Vegas">
      <span aria-hidden="true">↗</span>
    </a>
    <figcaption>Meow Wolf · Omega Mart visit page</figcaption>
  </figure></div>`,
  'Reference case / Apple TV': imageCase({
    url: severance,
    image: 'https://i.ytimg.com/vi/QYVyTvnAsQw/hqdefault.jpg',
    alt: 'Apple TV’s footage of the Severance office pop-up at Grand Central Terminal',
    caption: 'Apple TV · Inside the Grand Central Terminal Pop-Up',
    mark: '▶'
  }),
  'Reference case / Framestore × McCann': `<figure class="visual mars-stills">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image.jpeg?itok=svnJyjMT" alt="Children queue outside the yellow school bus">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image%202.jpeg?itok=X-vx1knt" alt="Passengers see the Mars terrain through the bus windows">
    <figcaption>Production photographs and reach figures from <a href="${marsResults}" target="_blank" rel="noopener">Framestore’s case materials ↗</a></figcaption>
  </figure>`,
  'Reference / Attention, sharing and action': `<div class="visual mechanism-grid">
    <section><small>NOTICE A GAP</small><strong>“Why would chocolate need installing?”</strong><p>A specific unanswered question can invite a closer look.</p><a href="${studies.curiosity}">Loewenstein (1994)</a></section>
    <section><small>SAMPLE THE EXPERIENCE</small><strong>Show what the audience sees or does.</strong><p>A small demonstration can convey how the full experience feels.</p><a href="${studies.experience}">Brakus et al. (2009)</a></section>
    <section><small>SHARE WITH SOMEONE</small><strong>“You have to see this.”</strong><p>Activating emotions and the intended recipient can shape what gets shared.</p><a href="${studies.sharing}">Berger &amp; Milkman (2012)</a></section>
    <section><small>MAKE ACTION POSSIBLE</small><strong>Give an interested person an easy next step.</strong><p>Put the prompt where the audience can act on it.</p><a href="${studies.action}">Fogg (2009)</a></section>
  </div>`,
  'After feedback / Section 3-2': `<div class="visual execution-example">
    <h2>Night Routes · Example record</h2>
    <dl>
      <div><dt>Published</dt><dd>November 13 · 15:30 KST</dd></div>
      <div><dt>Target audience</dt><dd>Local explorers in Daejeon</dd></div>
      <div><dt>Direct link</dt><dd>[URL of the published post]</dd></div>
      <div><dt>Action to observe</dt><dd>Replies suggesting a place to record</dd></div>
      <div><dt>Starting point</dt><dd>0 replies at 15:34 KST</dd></div>
    </dl>
  </div>`,
  'Submission / November 19': `<details class="visual workshop-resources">
    <summary>Research sources and more cases</summary>
    <div class="case-pair additional-cases">
      ${imageCase({
    url: 'https://newsroom.spotify.com/media-kit/2024-wrapped/',
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2024/12/SummaryShareCard.jpg',
    alt: 'Spotify Wrapped 2024 example share cards showing listening summaries',
    caption: 'Spotify Newsroom · 2024 Wrapped summary share card',
    fit: 'contain-media'
  })}
      <figure class="visual source-media">
    <a class="media-preview" href="${dreamGarden}" target="_blank" rel="noopener" aria-label="Open d’strict’s Dreaming Garden project page">
      <img src="https://i.ytimg.com/vi/hrU85UBb5vo/hqdefault.jpg" alt="Video preview for Dreaming Garden at Café Dior Seongsu">
      <span aria-hidden="true">▶</span>
    </a>
    <figcaption>d’strict · Café Dior Seongsu, Dreaming Garden</figcaption>
  </figure>
      ${imageCase({
    url: greenKnight,
    image: 'https://shop.a24films.com/cdn/shop/files/01-Hero_eca73425-389c-4c62-97be-958ded94d8d9.jpg?v=1759509683&width=900',
    alt: 'The Green Knight roleplaying game box and tabletop components',
    caption: 'A24 · The Green Knight: A Fantasy Roleplaying Game',
    fit: 'contain-media'
  })}
    </div>
    <div class="references-grid">
    <section><h2>Research</h2>
      <ul>
        <li><a href="${studies.curiosity}">Loewenstein (1994) · The Psychology of Curiosity</a></li>
        <li><a href="${studies.experience}">Brakus, Schmitt &amp; Zarantonello (2009) · Brand Experience</a></li>
        <li><a href="${studies.sharing}">Berger &amp; Milkman (2012) · What Makes Online Content Viral?</a></li>
        <li><a href="${studies.selfPresentation}">Barasch &amp; Berger (2014) · Broadcasting and Narrowcasting</a></li>
        <li><a href="${studies.action}">Fogg (2009) · A Behavior Model for Persuasive Design</a></li>
        <li><a href="${studies.measurement}">Gordon et al. (2019) · Advertising Measurement</a></li>
      </ul>
    </section>
    <section><h2>Campaigns</h2>
      <ul>
        <li><a href="${omegaTrailer}">Meow Wolf · 404 Chocolate commercial</a> and <a href="${omegaVisit}">Omega Mart visit page</a></li>
        <li><a href="${severance}">Apple TV · Severance Grand Central Pop-Up</a></li>
        <li><a href="${mars}">Framestore · Field Trip to Mars</a> and <a href="${marsResults}">reported reach</a></li>
        <li><a href="https://newsroom.spotify.com/media-kit/2024-wrapped/">Spotify · 2024 Wrapped media kit</a> and <a href="https://s29.q4cdn.com/175625835/files/doc_financials/2024/q4/Q4-2024-Shareholder-Deck-FINAL.pdf">shareholder results</a></li>
        <li><a href="${dreamGarden}">d’strict · Café Dior Seongsu, Dreaming Garden</a></li>
        <li><a href="${greenKnight}">A24 · The Green Knight tabletop game</a></li>
      </ul>
    </section>
  </div>
  </details>`
};
