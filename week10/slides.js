const figJam = 'https://www.figma.com/board/VEX2J0NwnMC9NLmW6R6hR8/Media-Business---Startup?node-id=268-2';
const omegaTrailer = 'https://www.youtube.com/watch?v=sMwu6CwS0jI';
const omegaVisit = 'https://meowwolf.com/visit/las-vegas';
const severance = 'https://www.youtube.com/watch?v=QYVyTvnAsQw';
const mars = 'https://www.framestore.com/work/field-trip-mars';
const marsResults = 'https://framestorevr.com/field-trip-to-mars';
const studies = {
  curiosity: 'https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf',
  experience: 'https://doi.org/10.1509/jmkg.73.3.052',
  sharing: 'https://doi.org/10.1509/JMR.10.0353',
  action: 'https://doi.org/10.1145/1541948.1541999'
};

const slides = [
  {
    tag: "Week 10 / November 13, 2026", theme: "launch-cover",
    content: ["From first look to first action", "Last week your team chose a promotion goal and a channel, then drafted a first post. Today each team presents its draft and plan, looks at campaign examples, publishes its post, and gets feedback."],
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
    content: ["Publish and share your post", "Publish your team’s promotional post on the website or social channel you chose in Week 9.", [
      ["Share in FigJam", "During class, share the link to your published post in your team’s FigJam space."]
    ]],
    link: ["Open team FigJam", figJam]
  },
  {
    tag: "03 / Individual feedback", theme: "ink",
    content: ["Respond as a potential user", "Choose a project from another team that you would like to try, visit or learn more about.", [
      ["Leave a response", "Write a short comment on the post or send a question through the project website. If neither is available, write next to the project’s post link in FigJam."],
      ["Show the instructor", "Before you leave, show your posted comment, the inquiry confirmation or your FigJam response."]
    ]]
  },
  {
    tag: "Next class / November 20", theme: "chalk",
    content: ["Review the responses you received", "Bring the comments and inquiries your team received. We’ll look at what people noticed and what they asked about.", [
      ["Next class", "Use the responses to decide what to clarify in your opening copy, image or first screen."]
    ]]
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
    <section><strong>Publish</strong><p>Share your post link in FigJam.</p></section>
    <section><strong>Respond</strong><p>Leave a response on a project that interests you.</p></section>
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
  'Before posting / What to borrow': `<div class="visual activity-visual campaign-choice">
    <figure class="visual activity-photo"><img src="media/edit-opening.jpg" alt="A student compares three possible opening frames for a promotional video." width="627" height="627"></figure>
    <div class="mechanism-grid">
    <section><small>NOTICE A GAP</small><strong>“Why would chocolate need installing?”</strong><p>A specific unanswered question can invite a closer look.</p><a href="${studies.curiosity}">Loewenstein (1994)</a></section>
    <section><small>SAMPLE THE EXPERIENCE</small><strong>Show what the audience sees or does.</strong><p>A small demonstration can convey how the full experience feels.</p><a href="${studies.experience}">Brakus et al. (2009)</a></section>
    <section><small>SHARE WITH SOMEONE</small><strong>“You have to see this.”</strong><p>Activating emotions and the intended recipient can shape what gets shared.</p><a href="${studies.sharing}">Berger &amp; Milkman (2012)</a></section>
    <section><small>MAKE ACTION POSSIBLE</small><strong>Give an interested person an easy next step.</strong><p>Put the prompt where the audience can act on it.</p><a href="${studies.action}">Fogg (2009)</a></section>
    </div>
  </div>`,
  '02 / Team publishing': `<figure class="visual activity-photo"><img src="media/publish-post.jpg" alt="A student checks how the same promotional artwork appears on a laptop and a phone." width="627" height="627"></figure>`,
  '03 / Individual feedback': `<div class="visual activity-visual">
    <figure class="visual activity-photo"><img src="media/leave-feedback.jpg" alt="A student types a comment on another team's promotional post." width="627" height="627"></figure>
    <div class="mechanism-stack"><section><small>EXAMPLE COMMENT</small><strong>“The opening made me want to try it. Where can I experience it?”</strong></section></div>
  </div>`,
  'Next class / November 20': `<figure class="visual activity-photo"><img src="media/review-responses.jpg" alt="Two students compare promotional images and handwritten audience notes." width="627" height="627"></figure>`
};
