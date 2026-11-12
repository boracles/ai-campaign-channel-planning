const figJam = 'https://www.figma.com/board/VEX2J0NwnMC9NLmW6R6hR8/Media-Business---Startup?node-id=268-2';
const omegaTrailer = 'https://www.youtube.com/watch?v=sMwu6CwS0jI';
const omegaVisit = 'https://meowwolf.com/visit/las-vegas';
const dreamGarden = 'https://www.dstrict.com/COMMERCIAL/?bmode=view&idx=13263730';
const severance = 'https://www.youtube.com/watch?v=QYVyTvnAsQw';
const mars = 'https://www.framestore.com/work/field-trip-mars';
const marsResults = 'https://framestorevr.com/field-trip-to-mars';
const wrapped = 'https://newsroom.spotify.com/2024-12-04/10-years-spotify-wrapped/';
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
    tag: 'Week 10 / November 13, 2026', theme: 'launch-cover',
    content: ['From first look to first action', 'How do you get the right person to take the next step after seeing your media project?']
  },
  {
    tag: 'Today / Workshop schedule', theme: 'ink schedule',
    content: ['Today’s workshop', 'Your team will leave with one live post, one direct link and a record of what you can observe.']
  },
  {
    tag: 'Warm-up / 10 min', theme: 'chalk',
    content: ['Give your Week 9 draft a five-second test', 'Open your team’s draft and give another team five seconds to look at it. Keep the draft open for later.', [
      ['Reader', 'Say what the project is, who it seems to be for and what you would do next.'],
      ['Team', 'Write down the first point they could not answer. Bring it to the workshop.']
    ]],
    link: ['Open team FigJam', figJam]
  },
  {
    tag: 'Case study / Meow Wolf · Commercial', theme: 'ink media-case',
    content: ['What makes you stop?', 'Watch the first 25 seconds of Meow Wolf’s 404 Chocolate commercial for Omega Mart.', [
      ['The hook', 'A familiar product ad makes a strange promise about digital chocolate.'],
      ['Watch for', 'When do you realize this is a fictional store? What do you still want to find out?']
    ]],
    link: ['Open the official commercial', omegaTrailer]
  },
  {
    tag: 'Case study / Meow Wolf · Visit page', theme: 'chalk media-case',
    content: ['What makes a visit possible?', 'Now open the website for the same experience. Find the information that makes a visit possible.', [
      ['Experience', 'A surreal grocery store leads into an immersive art installation.'],
      ['Visitor details', 'The page explains what to expect and gives practical information about the visit.'],
      ['Next step', 'A ticket link takes visitors from browsing to booking.']
    ]],
    link: ['Open the official visit page', omegaVisit]
  },
  {
    tag: 'Case study / Apple TV', theme: 'ink media-case',
    content: ['Put the story in public', 'For Severance Season 2, Apple TV staged the fictional Lumon office in a glass cube at Grand Central Terminal.', [
      ['Creative choice', 'People passing through the station could watch office workers perform inside the show’s world.'],
      ['How it travelled', 'Apple turned the live event into an official video. The office and spectators tell the story in the same frame.'],
      ['Discuss', 'Which detail would make sense to someone who had never watched the show?']
    ]],
    link: ['Watch the official pop-up footage', severance]
  },
  {
    tag: 'Case study / Framestore × McCann', theme: 'ink media-case mars-case',
    content: ['Make the promise an experience', 'For Lockheed Martin’s Generation Beyond initiative, a school bus used its windows as screens to take groups on a virtual trip to Mars.', [
      ['Creative choice', 'A familiar field trip becomes an experience the passengers discover together.'],
      ['Reported reach', 'Framestore reports more than 2,500 riders, 2.5 million video views and 120 million impressions.'],
      ['Discuss', 'What could a viewer understand from the footage? What would they have to experience in person?']
    ]],
    link: ['Open Framestore’s production case', mars]
  },
  {
    tag: 'Case study / Spotify', theme: 'chalk media-case',
    content: ['Give people something about themselves', 'Spotify Wrapped turns listening history into a visual recap with share cards.', [
      ['Creative choice', 'The listener becomes the subject. The card gives them a ready-made way to show their music taste.'],
      ['Reported result', 'Spotify reported that Wrapped user engagement increased 10% year over year in 2024.'],
      ['Discuss', 'What might you post publicly? What might you send to one friend?']
    ]],
    link: ['Explore the official Wrapped case', wrapped]
  },
  {
    tag: 'Case study / d’strict', theme: 'ink media-case',
    content: ['What helps a client picture a commission?', 'd’strict’s portfolio shows a media wall created for Café Dior Seongsu.', [
      ['What it shows', 'How a digital garden plays across a wall inside a specific venue.'],
      ['What a client can infer', 'The studio can design media for a physical space and adapt it to a brand.'],
      ['Discuss', 'If you managed a venue, what else would you need before contacting the studio?']
    ]],
    link: ['Open the official project page', dreamGarden]
  },
  {
    tag: 'Case discussion / 5 min', theme: 'signal',
    content: ['Who should take the next step?', 'Choose one case. Point to the part of the video or page that supports your answer.', [
      ['Person', 'Who is most likely to respond here?'],
      ['Action', 'What can they do as soon as they see it?'],
      ['Evidence', 'Which visible or audible choice could make that action more likely?']
    ]]
  },
  {
    tag: 'Research / Curiosity', theme: 'chalk research',
    content: ['A clear question makes people look again', 'Loewenstein’s information-gap theory proposes that curiosity starts when we notice something specific we want to know.', [
      ['See it in Omega Mart', 'The grocery commercial is recognizable. The idea of installing chocolate leaves one clear question.'],
      ['Try it', 'Show one odd but readable detail from your project. Give the audience a way to find out what it means.']
    ]],
    link: ['Loewenstein (1994)', studies.curiosity]
  },
  {
    tag: 'Research / Brand experience', theme: 'ink research',
    content: ['Let people sample the experience', 'Brakus, Schmitt and Zarantonello describe brand experience in four dimensions: sensory, emotional, intellectual and behavioral.', [
      ['See it in Field Trip to Mars', 'The moving view is sensory. Looking out and pointing are actions people can take together.'],
      ['Try it', 'Show a short clip of the actual interaction, let someone hear one sound, or give them one thing to try.']
    ]],
    link: ['Brakus, Schmitt &amp; Zarantonello (2009)', studies.experience]
  },
  {
    tag: 'Research / Social sharing', theme: 'chalk research',
    content: ['Give people a reason to pass it on', 'Sharing can serve different purposes. A striking moment can be worth sending, and a personalized card can say something about the person sharing it.', [
      ['Activation', 'Berger and Milkman linked activating emotions to more sharing in news data and controlled studies.'],
      ['Self-presentation', 'Barasch and Berger found that who you share with changes what you choose to pass along.'],
      ['Try it', 'Pick a specific person someone might send your post to. Ask what that person would get from it.']
    ]],
    link: ['Berger &amp; Milkman (2012)', studies.sharing]
  },
  {
    tag: 'Research / Taking action', theme: 'ink research',
    content: ['Make the next step easy to take', 'Fogg’s behavior model asks whether someone wants to act, can act and sees a clear prompt at the right moment.', [
      ['See it on the visit page', 'The experience creates a reason to visit. The ticket link shows where to act, and practical details help people decide.'],
      ['Try it', 'Open your post on a phone and go all the way to the preview, reply or enquiry. Find the first place you hesitate.']
    ]],
    link: ['Fogg (2009)', studies.action]
  },
  {
    tag: 'Mini lesson / Audience and buyer', theme: 'chalk',
    content: ['Who experiences it? Who pays?', 'A visitor and a person commissioning the experience need different information. Choose one reader for today’s post.']
  },
  {
    tag: 'Mini lesson / The post', theme: 'ink',
    content: ['Hook. Proof. Next step.', 'Give your reader a reason to look, something concrete to believe and one action they can take.', [
      ['Hook', 'Lead with what this audience can experience or use.'],
      ['Proof', 'Show a preview, frame, demo or prototype labeled at its actual stage.'],
      ['Next step', 'Use a specific action such as “Watch the preview” or “Ask about a venue demo.”']
    ]]
  },
  {
    tag: 'Worked example / Same project, two readers', theme: 'chalk comparison',
    content: ['One project, two different posts', 'Night Routes is a fictional team project. Both versions show the same sound map prototype.']
  },
  {
    tag: 'Mini lesson / Evidence', theme: 'ink evidence',
    content: ['What could this post tell you?', 'Choose a response you can observe next week. A single post gives your team observations. Measuring how much the post caused would require a comparison.'],
    link: ['Gordon et al. (2019) · Advertising measurement', studies.measurement]
  },
  {
    tag: 'Workshop / Team production · 35 min', theme: 'signal',
    content: ['Make one post ready to publish', 'Use your Week 9 draft and the cold reader’s feedback. Work in your team’s FigJam space.', [
      ['5 min · Decide', 'Pick one audience, one channel and one action. Choose one idea from a case to adapt.'],
      ['20 min · Make', 'Edit the opening, show one piece of visual or audio proof, and prepare the link or reply prompt.'],
      ['10 min · Check', 'Preview on a phone, test the next action and assign one teammate to publish.']
    ]],
    link: ['Open team FigJam', figJam]
  },
  {
    tag: 'Workshop / Channel check', theme: 'chalk',
    content: ['Build for the place it will appear', 'Choose one format your team can finish and verify today.', [
      ['Social feed', 'Put the experience in the opening frame or image. Add a short caption and a next step the platform supports.'],
      ['Project website', 'Show what it is, who it serves and one preview. Put the next step close to the preview.'],
      ['Relevant community', 'Check posting rules. Start with why the project matters to this group, then share one direct link.']
    ]]
  },
  {
    tag: 'Peer test / 20 min', theme: 'ink',
    content: ['Let another team try it', 'Swap previews. Give them five seconds to look, then ask them to try the action.', [
      ['Read', '“What is this, and who is it for?”'],
      ['Act', '“Where would you tap, click or reply?” Have them do it.'],
      ['Revise', 'Tell the team where you hesitated. Each team makes one change before publishing.']
    ]]
  },
  {
    tag: 'Workshop / Publish and verify · 25 min', theme: 'signal',
    content: ['Publish and open the live link', 'Use a team account, a project site or another approved space that your intended audience can access. Personal accounts are optional.', [
      ['Before posting', 'Check media permissions, the people shown, and who can see the post. Make the project stage clear.'],
      ['After posting', 'Copy the direct link. Ask a teammate to open it from their own device and try the next action.'],
      ['If access fails', 'Adjust visibility for the intended audience or choose a team channel you can verify.']
    ]]
  },
  {
    tag: 'Workshop / Section 3-2', theme: 'chalk',
    content: ['Record what went live', 'In section 3-2 of your application, log the date, target audience and direct link. Keep any available starting figure and its timestamp.']
  },
  {
    tag: 'Show and tell / 20 min', theme: 'ink',
    content: ['Show the post in 60 seconds', 'Each team opens its published link and shares one decision it made.', [
      ['15 sec', 'Who did you want to reach, and where did you post?'],
      ['25 sec', 'Show a case idea you adapted or a change you made after the peer test.'],
      ['20 sec', 'What action do you hope to see, and what can you check next week?']
    ]]
  },
  {
    tag: 'Submission / November 19', theme: 'signal',
    content: ['Two items in FigJam', 'Due Thursday, November 19 at 23:59 KST. One representative submits in the team’s FigJam space.', [
      ['Published link', 'One direct URL that opens the actual post.'],
      ['Team roles', 'One line per team member with their name and contribution.']
    ]],
    link: ['Open team FigJam', figJam]
  },
  {
    tag: 'Next class / November 20', theme: 'chalk',
    content: ['Bring back what happened', 'Next Friday we will compare the actual response with the action you asked people to take.', [
      ['Bring', 'The live link, the observation period and any responses or metrics you can see.'],
      ['Report', 'Record zero responses as zero. Mark figures you cannot access as unavailable.'],
      ['Decide', 'Use what you observed to revise the offer, message or channel.']
    ]]
  },
  {
    tag: 'Further case / A24', theme: 'ink media-case',
    content: ['Turn the film world into a game', 'A24’s The Green Knight tabletop set includes a map, character sheets and quests inspired by the film.', [
      ['Creative choice', 'The audience can take a role in the world and use the object with friends.'],
      ['Discuss', 'What small object could let someone take part in your project’s world?']
    ]],
    link: ['Open the official A24 product page', greenKnight]
  },
  {
    tag: 'References / Research and campaign sources', theme: 'chalk references',
    content: ['Sources for this workshop', 'Read the original studies or revisit the campaign materials.']
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
  'Today / Workshop schedule': `<div class="visual schedule-grid">
    <section><strong>55 min</strong><p>Draft warm-up · 10<br>Case analysis and discussion · 25<br>Mini lesson and example · 20</p></section>
    <section><strong>10 min</strong><p>Break</p></section>
    <section><strong>55 min</strong><p>Team production · 35<br>Peer test and revision · 20</p></section>
    <section><strong>10 min</strong><p>Break</p></section>
    <section><strong>50 min</strong><p>Publish and record · 25<br>Team show and tell · 20<br>Submission and wrap-up · 5</p></section>
  </div>`,
  'Case study / Meow Wolf · Commercial': `<figure class="visual source-media">
    <a class="media-preview" href="${omegaTrailer}" target="_blank" rel="noopener" aria-label="Watch Meow Wolf’s 404 Chocolate commercial">
      <img src="https://i.ytimg.com/vi/sMwu6CwS0jI/hqdefault.jpg" alt="Video preview for Meow Wolf’s 404 Chocolate commercial">
      <span aria-hidden="true">▶</span>
    </a>
    <figcaption>Meow Wolf · 404 Chocolate: Install the Flavor</figcaption>
  </figure>`,
  'Case study / Meow Wolf · Visit page': `<figure class="visual source-media">
    <a class="media-preview" href="${omegaVisit}" target="_blank" rel="noopener" aria-label="Open Meow Wolf’s Omega Mart visit page">
      <img src="https://cdn.prod.website-files.com/5dad7a19f43e6f31a9e92718%2F67255e97811920b93bc3e121_Vegas_Visit_Video_Trimmed-rf33-poster-00001.jpg" alt="Meow Wolf’s official visual preview for Omega Mart in Las Vegas">
      <span aria-hidden="true">↗</span>
    </a>
    <figcaption>Meow Wolf · Omega Mart visit page</figcaption>
  </figure>`,
  'Case study / Apple TV': imageCase({
    url: severance,
    image: 'https://i.ytimg.com/vi/QYVyTvnAsQw/hqdefault.jpg',
    alt: 'Apple TV’s footage of the Severance office pop-up at Grand Central Terminal',
    caption: 'Apple TV · Inside the Grand Central Terminal Pop-Up',
    mark: '▶'
  }),
  'Case study / Framestore × McCann': `<figure class="visual mars-stills">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image.jpeg?itok=svnJyjMT" alt="Children queue outside the yellow school bus">
    <img src="https://www.framestore.com/sites/default/files/styles/full_width_688_x_variable_height/public/2022-06/field%20trip%20to%20mars%20image%202.jpeg?itok=X-vx1knt" alt="Passengers see the Mars terrain through the bus windows">
    <figcaption>Production photographs and reach figures from <a href="${marsResults}" target="_blank" rel="noopener">Framestore’s case materials ↗</a></figcaption>
  </figure>`,
  'Case study / Spotify': imageCase({
    url: 'https://newsroom.spotify.com/media-kit/2024-wrapped/',
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2024/12/SummaryShareCard.jpg',
    alt: 'Spotify Wrapped 2024 example share cards showing listening summaries',
    caption: 'Spotify Newsroom · 2024 Wrapped summary share card',
    fit: 'contain-media'
  }),
  'Case study / d’strict': `<figure class="visual source-media">
    <a class="media-preview" href="${dreamGarden}" target="_blank" rel="noopener" aria-label="Open d’strict’s Dreaming Garden project page">
      <img src="https://i.ytimg.com/vi/hrU85UBb5vo/hqdefault.jpg" alt="Video preview for Dreaming Garden at Café Dior Seongsu">
      <span aria-hidden="true">▶</span>
    </a>
    <figcaption>d’strict · Café Dior Seongsu, Dreaming Garden</figcaption>
  </figure>`,
  'Research / Curiosity': `<div class="visual mechanism-stack">
    <section><small>01 · RECOGNIZE</small><strong>A grocery commercial</strong></section>
    <section><small>02 · NOTICE A GAP</small><strong>Why would chocolate need installing?</strong></section>
    <section><small>03 · LOOK FOR AN ANSWER</small><strong>Find out what Omega Mart is.</strong></section>
  </div>`,
  'Research / Brand experience': `<div class="visual mechanism-grid">
    <section><small>SENSORY</small><strong>What do you see or hear?</strong></section>
    <section><small>EMOTIONAL</small><strong>What do you feel?</strong></section>
    <section><small>INTELLECTUAL</small><strong>What do you think about?</strong></section>
    <section><small>BEHAVIORAL</small><strong>What do you do?</strong></section>
  </div>`,
  'Research / Social sharing': `<div class="visual mechanism-stack">
    <section><small>SEVERANCE</small><strong>“You have to see this.”</strong><p>Send a striking moment.</p></section>
    <section><small>SPOTIFY WRAPPED</small><strong>“This was my year.”</strong><p>Share something about yourself.</p></section>
  </div>`,
  'Research / Taking action': `<div class="visual mechanism-stack">
    <section><small>MOTIVATION</small><strong>I want to see the exhibition.</strong></section>
    <section><small>ABILITY</small><strong>I know where it is and can book.</strong></section>
    <section><small>PROMPT</small><strong>The ticket link is right here.</strong></section>
  </div>`,
  'Mini lesson / Audience and buyer': `<div class="visual audience-grid">
    <section><h2>Visitor</h2><p>“What will I experience, and can I go?”</p><p>Show the experience, location and visit details.</p></section>
    <section><h2>Venue producer</h2><p>“Could this work in our space?”</p><p>Show the format, a credible demo and a way to discuss fit.</p></section>
  </div>`,
  'Worked example / Same project, two readers': `<div class="visual sample-grid">
    <section class="campaign-sample social-sample">
      <p class="sample-eyebrow">SOCIAL VIDEO · LOCAL EXPLORERS</p>
      <div class="sample-art" aria-hidden="true"><span>NIGHT<br>ROUTES</span><i></i><i></i><i></i></div>
      <h2>What does Daejeon sound like after dark?</h2>
      <p>Hear a late-night market in our 30-second sound map prototype.</p>
      <p class="sample-action">Reply with a place we should record next.</p>
    </section>
    <section class="campaign-sample web-sample">
      <p class="sample-eyebrow">PROJECT WEBSITE · FESTIVAL PROGRAMMERS</p>
      <div class="sample-art" aria-hidden="true"><span>NIGHT<br>ROUTES</span><i></i><i></i><i></i></div>
      <h2>An interactive sound map for a listening station</h2>
      <p>See how visitors can tap a map to hear field recordings. This prototype previews one location.</p>
      <p class="sample-action">Ask about a venue demo.</p>
    </section>
  </div>`,
  'Mini lesson / Evidence': `<div class="visual evidence-grid">
    <section><h2>Views</h2><p>The platform counted plays or displays.</p><p class="evidence-limit">Check how the platform defines a view. Counts may include repeat viewers.</p></section>
    <section><h2>Relevant replies</h2><p>People responded to your question.</p><p class="evidence-limit">Read what they said before interpreting the count.</p></section>
    <section><h2>Demo enquiries</h2><p>Someone took a step toward a conversation.</p><p class="evidence-limit">Price and purchase intent still need a separate check.</p></section>
  </div>`,
  'Workshop / Channel check': `<figure class="visual storyboard">
    <div><b>1</b><strong>First frame</strong><p>“What does Daejeon sound like at night?”</p></div>
    <div><b>2</b><strong>Interaction</strong><p>Show a map tap and play one recording.</p></div>
    <div><b>3</b><strong>Next action</strong><p>“Reply with a place we should record.”</p></div>
    <figcaption>Night Routes · Example three-frame social teaser</figcaption>
  </figure>`,
  'Workshop / Section 3-2': `<div class="visual execution-example">
    <h2>Night Routes · Example record</h2>
    <dl>
      <div><dt>Published</dt><dd>November 13 · 15:04 KST</dd></div>
      <div><dt>Target audience</dt><dd>Local explorers in Daejeon</dd></div>
      <div><dt>Direct link</dt><dd>[URL of the published post]</dd></div>
      <div><dt>Action to observe</dt><dd>Replies suggesting a place to record</dd></div>
      <div><dt>Starting point</dt><dd>0 replies at 15:08 KST</dd></div>
    </dl>
  </div>`,
  'Further case / A24': imageCase({
    url: greenKnight,
    image: 'https://shop.a24films.com/cdn/shop/files/01-Hero_eca73425-389c-4c62-97be-958ded94d8d9.jpg?v=1759509683&width=900',
    alt: 'The Green Knight roleplaying game box and tabletop components',
    caption: 'A24 · The Green Knight: A Fantasy Roleplaying Game',
    fit: 'contain-media'
  }),
  'References / Research and campaign sources': `<div class="visual references-grid">
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
  </div>`
};
