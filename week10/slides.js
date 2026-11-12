const figJam = 'https://www.figma.com/board/VEX2J0NwnMC9NLmW6R6hR8/Media-Business---Startup?node-id=268-2';

const slides = [
  {
    tag: 'Publishing workshop / 13 Nov 2026',
    theme: 'cover photo-slide',
    content: ['Publish on Website or Social Media', 'Refine your Week 9 draft and publish one promotional post for your team’s project.']
  },
  {
    tag: '01 / Workshop plan',
    theme: 'moss outputs',
    content: ['From draft to live link', 'Open your team’s FigJam space. Bring up your Week 9 goal, channel and first draft.', [
      ['Revise', 'Make the message clear for the people you want to reach.'],
      ['Publish', 'Post once on your chosen website or social channel.'],
      ['Verify', 'Open the direct link and record what you published.']
    ]],
    link: ['Open team FigJam', figJam]
  },
  {
    tag: '02 / Choose where to publish',
    theme: 'paper',
    content: ['Where will your audience see it?', 'Use the channel your team chose in Week 9, or update it if you need a better fit.', [
      ['Project website', 'Publish a project update, teaser or landing page with a direct link.'],
      ['Social media', 'Use a team account or a relevant community that allows project posts.'],
      ['Account access', 'Check who can post. Using a personal account is optional.']
    ]]
  },
  {
    tag: '03 / Refine the message',
    theme: 'moss',
    content: ['Give people one clear next step', 'Name the audience, show what the project offers and ask for one action.', [
      ['Audience', 'Who should recognize that this is for them?'],
      ['Offer', 'What experience can they see, try or learn about today?'],
      ['Action', 'What should they do after seeing the post?']
    ]]
  },
  {
    tag: '04 / Before you publish',
    theme: 'paper',
    content: ['Check the post on a phone', 'Have a teammate open the preview and read it once.', [
      ['Readability', 'Check the first line, text size, crop and captions.'],
      ['Accuracy', 'Make the project stage clear. Label a concept or prototype as such.'],
      ['Permissions', 'Check the image and audio terms, permission from identifiable people, and who can see the post.']
    ]]
  },
  {
    tag: '05 / Publish and verify',
    theme: 'presentations photo-slide',
    content: ['Publish one post', 'Choose one teammate to publish. Then check the published version together.', [
      ['Copy the link', 'Use the direct URL to the post or project update.'],
      ['Check access', 'Ask a teammate to open it using their account or a signed-out window.'],
      ['Open the next step', 'Make sure the preview, form or other action in the post works.']
    ]]
  },
  {
    tag: '06 / Record execution',
    theme: 'moss',
    content: ['Save the starting point', 'Log the publication date, target audience and direct link in section 3-2 of your business plan.', [
      ['At publication', 'Record any available starting figures and when you checked them.'],
      ['Next class', 'On November 20, review available responses and decide what to revise.']
    ]]
  },
  {
    tag: '07 / Team submission',
    theme: 'lime',
    content: ['Submit in FigJam', 'Thursday, November 19 · 23:59 KST', [
      ['One published link', 'Paste the direct link to the post your team published.'],
      ['Roles by team member', 'Write each member’s name and contribution on one line.']
    ], 'One representative submits both items in your team’s FigJam space.'],
    link: ['Open team FigJam', figJam]
  }
];

const visuals = {
  '03 / Refine the message': `<figure class="visual post-example">
    <div class="draft-example">
      <p class="output-kicker">Week 9 draft</p>
      <p>“Check out our new interactive media project!”</p>
    </div>
    <div class="draft-example published-example">
      <p class="output-kicker">Week 10 revision</p>
      <p><strong>Explore Daejeon through its night sounds.</strong></p>
      <p>If you’re looking for a new way to explore the city, try our 30-second interactive sound map prototype.</p>
      <p class="example-action">Listen to the preview →</p>
    </div>
    <figcaption>Fictional example · Project website</figcaption>
  </figure>`,
  '06 / Record execution': `<figure class="visual">
    <div class="draft-example">
      <p class="output-kicker">Section 3-2 · Execution record</p>
      <dl class="example-details">
        <div><dt>Published</dt><dd>November 13, 2026</dd></div>
        <div><dt>Audience</dt><dd>People looking for a new way to explore Daejeon</dd></div>
        <div><dt>Post URL</dt><dd>[Paste the direct link]</dd></div>
        <div><dt>Baseline</dt><dd>[Figure and time checked, if available]</dd></div>
      </dl>
    </div>
    <figcaption>Example record for the sound map prototype</figcaption>
  </figure>`
};
