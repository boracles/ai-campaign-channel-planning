const figJam = 'https://www.figma.com/board/VEX2J0NwnMC9NLmW6R6hR8/Media-Business---Startup?node-id=268-2';
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
    content: ["From first look to first action", "Last week your team chose a promotion goal and a channel, then drafted a first post. Today each team presents its draft and plan, looks at campaign examples, publishes one post, and gets feedback."],
    showStartButton: false
  },
  {
    tag: "01 / Team presentations", theme: "chalk",
    content: ["Show your draft and today’s plan", "Each team opens its Week 9 promotional draft and briefly explains how it will promote the project today.", [
      ["Show", "Share the copy, image or short clip your team prepared."],
      ["Plan", "Who do you want to reach, what do you want to tell them, and where will you post it?"]
    ]]
  },
  {
    tag: "Case 01 / Meow Wolf", theme: "ink comparison",
    content: ["One campaign, two jobs", "Watch the first 25 seconds of the 404 Chocolate commercial, then open the visit page. What does each channel help the audience discover or do?"]
  },
  {
    tag: "Case 02 / Apple TV", theme: "ink media-case",
    content: ["Put the story in public", "Apple TV staged the fictional Lumon office in a glass cube at Grand Central Terminal to promote Severance Season 2.", [
      ["Creative choice","The performance lets commuters glimpse the story world. The glass cube gives viewers a frame they can capture and share."],
      ["Discuss","What in the first frame would make someone unfamiliar with the show stop?"]
    ]],
    link: ["Watch the official pop-up footage", severance]
  },
  {
    tag: "Case 03 / Framestore × McCann", theme: "chalk media-case",
    content: ["Make the promise an experience", "A school bus used its windows as screens to take groups on a virtual trip to Mars.", [
      ["Creative choice","Passengers could see the terrain change and discover it together."],
      ["Discuss","How could your team give people a five-second sample of your project?"]
    ]],
    link: ["Open Framestore’s production case", mars]
  },
  {
    tag: "Before posting / What to borrow", theme: "ink research",
    content: ["Why might people respond?", "Pick one idea from the cases that fits your post. Decide what you’ll use before you publish."]
  },
  {
    tag: "02 / Team publishing", theme: "signal",
    content: ["Publish and share one link", "Publish one promotional post per team on the website or social channel you chose in Week 9.", [
      ["Share in FigJam", "Paste only the direct link to your published post in your team’s space so the other teams can open it."]
    ]],
    link: ["Open team FigJam", figJam]
  },
  {
    tag: "03 / Team feedback", theme: "ink",
    content: ["Give the post a headline", "Look at the first screen or first five seconds of another team’s post. The publishing team listens first.", [
      ["Name it", "If you sent this to a friend, what one line would you use to describe it? Point to what gave you that impression."],
      ["Compare", "The publishing team says what it wanted people to take away. Compare the two lines."],
      ["One change", "The instructor points to one change in the wording, image or opening frame."]
    ]]
  },
  {
    tag: "Next class / November 20", theme: "chalk",
    content: ["Bring two impressions to Week 11", "Keep one line about the impression your team intended and one line about how the other team read the post.", [
      ["Next class", "Compare the two impressions with any available audience response, then revise the opening copy, main image or first screen."]
    ]]
  },
  {
    tag: "Submission / November 19", theme: "signal",
    content: ["One published link in FigJam", "By Thursday, November 19 at 23:59 KST, one representative shares the direct link to the team’s published post in FigJam."],
    link: ["Open team FigJam", figJam]
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
  '01 / Team presentations': `<div class="visual schedule-grid">
    <section><strong>Present</strong><p>Show the draft and today’s promotion plan.</p></section>
    <section><strong>Look</strong><p>Watch the campaign examples before posting.</p></section>
    <section><strong>Publish</strong><p>Share one live link in FigJam.</p></section>
    <section><strong>Compare</strong><p>Hear how another team reads your post.</p></section>
  </div>`,
  'Case 01 / Meow Wolf': `<div class="visual case-pair"><figure class="visual source-media">
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
  'Case 02 / Apple TV': imageCase({
    url: severance,
    image: 'https://i.ytimg.com/vi/QYVyTvnAsQw/hqdefault.jpg',
    alt: 'Apple TV’s footage of the Severance office pop-up at Grand Central Terminal',
    caption: 'Apple TV · Inside the Grand Central Terminal Pop-Up',
    mark: '▶'
  }),
  'Case 03 / Framestore × McCann': `<figure class="visual mars-stills">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image.jpeg?itok=svnJyjMT" alt="Children queue outside the yellow school bus">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image%202.jpeg?itok=X-vx1knt" alt="Passengers see the Mars terrain through the bus windows">
    <figcaption>Production photographs and reach figures from <a href="${marsResults}" target="_blank" rel="noopener">Framestore’s case materials ↗</a></figcaption>
  </figure>`,
  'Before posting / What to borrow': `<div class="visual mechanism-grid">
    <section><small>NOTICE A GAP</small><strong>“Why would chocolate need installing?”</strong><p>A specific unanswered question can invite a closer look.</p><a href="${studies.curiosity}">Loewenstein (1994)</a></section>
    <section><small>SAMPLE THE EXPERIENCE</small><strong>Show what the audience sees or does.</strong><p>A small demonstration can convey how the full experience feels.</p><a href="${studies.experience}">Brakus et al. (2009)</a></section>
    <section><small>SHARE WITH SOMEONE</small><strong>“You have to see this.”</strong><p>Activating emotions and the intended recipient can shape what gets shared.</p><a href="${studies.sharing}">Berger &amp; Milkman (2012)</a></section>
    <section><small>MAKE ACTION POSSIBLE</small><strong>Give an interested person an easy next step.</strong><p>Put the prompt where the audience can act on it.</p><a href="${studies.action}">Fogg (2009)</a></section>
  </div>`,
  '03 / Team feedback': `<div class="visual mechanism-stack">
    <section><small>WHAT THE OTHER TEAM SAW</small><strong>“A guide to places to visit at night.”</strong></section>
    <section><small>WHAT THE TEAM MEANT</small><strong>“A map of sounds recorded at night.”</strong></section>
    <section><small>ONE CHANGE</small><strong>Play a market sound in the opening shot.</strong></section>
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
