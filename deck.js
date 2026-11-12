const slides = [
  {tag:'Workshop / 06 Nov 2026', theme:'cover photo-slide',
   content:['AI Campaign & Channel Planning','Set a promotion goal, choose a channel, and draft one post with AI.']},
  {tag:'01 / Team presentations',theme:'presentations photo-slide',
   content:['Team presentations','Start by sharing what your team prepared last time.',[['Present','Show your work and explain one decision your team made.'],['Listen','Note who each team wants to reach.'],['Carry it forward','Use your project and audience to set a promotion goal.']]]},
  {tag:'02 / Workshop outputs',theme:'moss outputs',
   content:['Three things per team','Open your team’s space in FigJam, fill in the three boxes, and show them for feedback.']},
  {tag:'03 / Promotion goal',theme:'paper game',
   content:['Set one promotion goal','Who do you want to reach, and what do you want them to know?']},
  {tag:'04 / Channel selection',
   content:['Where your audience is','Write the name of one place where your audience is likely to see the post.',[['Instagram / TikTok','Show the idea through a short clip or image.'],['Relevant community','Reach people who already share an interest in your topic.'],['Landing page','Show your idea on a project website.']]]},
  {tag:'05 / Campaign creative',theme:'creative',
   content:['Draft one post with AI','Give AI your promotion goal and enough context to write for your audience.',[['Give it a brief','Include your project, audience, goal and channel.'],['Draft one post','Make one piece of copy, image, or short clip that fits your channel.'],['Edit it together','Check the facts and make the wording sound like your team.']],'Put one draft in your team’s FigJam space for feedback.']},
  {tag:'06 / Wrap-up',theme:'lime wrap-up',
   content:['Team feedback','Show me the three boxes in your team’s FigJam space for feedback before you go.']}
];
const visuals = {
  '02 / Workshop outputs': `<figure class="visual output-example">
    <div class="output-grid three-outputs">
      <section class="assumption-example">
        <p class="output-kicker"><b>01</b> Promotion goal</p>
        <p class="example-claim">One sentence</p>
        <p>Who do you want to reach, and what do you want them to know?</p>
      </section>
      <section class="draft-example">
        <p class="output-kicker"><b>02</b> Promotion channel</p>
        <p class="example-claim">One channel</p>
        <p>Where are those people likely to see your post?</p>
      </section>
      <section class="draft-example">
        <p class="output-kicker"><b>03</b> First post draft</p>
        <p class="example-claim">One draft</p>
        <p>Add one caption, image, or short clip that fits your channel.</p>
      </section>
    </div>
  </figure>`,
  '03 / Promotion goal': `<figure class="visual game-example">
    <img src="media/choose-an-assumption.webp" alt="Students arranging sticky notes during a workshop">
    <div class="game-example-copy">
      <p class="output-kicker">Write one sentence as a team</p>
      <p>We want <strong style="display:inline">[audience]</strong> to <strong style="display:inline">[learn one thing about our project]</strong> after seeing our post.</p>
    </div>
  </figure>`,
  '04 / Channel selection': `<figure class="visual">
    <div class="draft-example">
      <p class="output-kicker">Make the choice as a team</p>
      <p class="example-claim">Name one channel.</p>
      <dl class="example-details">
        <div><dt>Think about</dt><dd>Where does your audience already look for this kind of content?</dd></div>
      </dl>
    </div>
  </figure>`,
  '05 / Campaign creative': `<figure class="visual">
    <div class="draft-example">
      <p class="output-kicker">Prompt starter</p>
      <p class="example-claim">“Draft one post for [audience] on [channel].”</p>
      <dl class="example-details">
        <div><dt>Project</dt><dd>[What it is and what stage it’s at]</dd></div>
        <div><dt>Goal</dt><dd>[What we want people to know]</dd></div>
        <div><dt>Message</dt><dd>[The main point]</dd></div>
      </dl>
    </div>
  </figure>`
};
