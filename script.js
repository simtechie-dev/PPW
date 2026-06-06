const contentArea = document.getElementById('content-area');
const navButtons = document.querySelectorAll('.nav-item');

const sections = {
  home: {
    title: 'Welcome to Simtechjr Hub',
    subtitle: 'A modern portfolio experience for web development, design, and digital storytelling.',
    html: `
      <section class="section">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="cta-text">Professional portfolio for a creative technologist</p>
            <h2>Hi, I’m <span class="highlight">Simtechjr</span>. I build brands, interfaces, and motion experiences with precision.</h2>
            <p class="hero-body">With expertise in web development, graphic design, and video editing, I help brands launch polished digital presences with a strong creative edge.</p>
            <button class="primary-button" data-action="contact">Let’s connect</button>
          </div>
          <div class="hero-card">
            <img class="hero-image" src="my photo.jpg" alt="Simtechjr portrait" />
            <div class="hero-meta">
              <p class="hero-meta-title">CapCut Partner • Designer</p>
              <p class="hero-meta-copy">Creating visual systems, sites and campaigns that feel confident, modern, and easy to use.</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },
  about: {
    title: 'About Me',
    subtitle: 'A digital creator who blends code, design, and storytelling into polished experiences.',
    html: `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Designer, developer and CapCut Partner</h2>
            <p>I deliver modern websites, brand visuals, and video content grounded in strategy and crafted for engagement.</p>
          </div>
        </div>
        <div class="card">
          <p>My journey began with creative production and evolved into full-stack web development. I bridge visual design and digital performance to help businesses, creators, and agencies launch projects that feel both polished and effective.</p>
          <div class="tag-list">
            <span class="tag">UI/UX</span>
            <span class="tag">Brand Design</span>
            <span class="tag">CapCut Editing</span>
            <span class="tag">Front-end Development</span>
          </div>
        </div>
      </section>
    `,
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Core capabilities that power every project.',
    html: `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Key strengths across design, development, and content creation</h2>
            <p>From responsive front-end builds to motion edits and brand systems, I bring clarity and quality to every deliverable.</p>
          </div>
        </div>
        <div class="skill-grid">
          <article class="skill-card"><h3>Web Development</h3><p>HTML, CSS, JavaScript, responsive design, landing pages, interactive sections.</p></article>
          <article class="skill-card"><h3>Graphic Design</h3><p>Brand identity, promotional visuals, layout composition, social media assets.</p></article>
          <article class="skill-card"><h3>Video Editing</h3><p>CapCut partner workflows, motion cuts, reels, editing for engagement.</p></article>
          <article class="skill-card"><h3>Digital Strategy</h3><p>Portfolio storytelling, project framing, conversion-focused presentation.</p></article>
        </div>
      </section>
    `,
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Selected work that reflects my style and skills.',
    html: `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Projects built for clarity, branding, and digital impact</h2>
            <p>Each project informs the next: clean interfaces, crisp motion, and thoughtful user experiences.</p>
          </div>
        </div>
        <div class="card-grid">
          <article class="card"><img class="project-image" src="flyer design.jpg" alt="Flyer design sample" /><h3>Brand Launch Website</h3><p>Modern landing page for a creative studio with smooth animations and responsive layouts.</p><div class="tag-list"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JS</span></div></article>
          <article class="card"><img class="project-image" src="flyer design 2.jpg" alt="Digital campaign flyer" /><h3>Digital Content Campaign</h3><p>A dynamic CapCut-based video series designed to improve brand reach on social platforms.</p><div class="tag-list"><span class="tag">Video Editing</span><span class="tag">Storytelling</span><span class="tag">Visual Design</span></div></article>
          <article class="card"><img class="project-image" src="flyer design 3.jpg" alt="Creative design showcase" /><h3>Interactive Portfolio</h3><p>Personal showcase site with easy navigation, polished typography, and clear service messaging.</p><div class="tag-list"><span class="tag">UI/UX</span><span class="tag">Performance</span><span class="tag">Accessibility</span></div></article>
        </div>
      </section>
    `,
  },
  services: {
    title: 'Services',
    subtitle: 'How I can help your next project succeed.',
    html: `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Services for clients, creators, and teams</h2>
            <p>Focused services that combine technical execution with creative direction.</p>
          </div>
        </div>
        <div class="service-grid">
          <article class="service-card"><h3>Web Design & Development</h3><p>Custom landing pages, portfolio sites, and business websites built with speed and polish.</p></article>
          <article class="service-card"><h3>Video Editing</h3><p>CapCut-friendly editing, social clips, transitions, and motion polish for digital campaigns.</p></article>
          <article class="service-card"><h3>Branding & Visual Identity</h3><p>Graphic design systems, logo concepts, promotional content, and digital storytelling guidance.</p></article>
        </div>
      </section>
    `,
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let’s start a conversation about your next project.',
    html: `
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Ready to collaborate?</h2>
            <p>Reach out if you want a portfolio website, brand content, or video assets crafted with a modern edge.</p>
          </div>
        </div>
        <div class="card">
          <ul class="contact-list">
            <li><strong>Email</strong><span>simgraffix@gmail.com</span></li>
            <li><strong>Location</strong><span>Remote, open to global collaborations</span></li>
            <li><strong>Availability</strong><span>Freelance projects, partnerships, mentorship</span></li>
          </ul>
        </div>
      </section>
    `,
  },
};

function loadSection(sectionKey) {
  const section = sections[sectionKey];
  if (!section) return;
  contentArea.innerHTML = section.html;
  contentArea.focus();
}

function setActiveNav(selection) {
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === selection);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const section = button.dataset.section;
    setActiveNav(section);
    loadSection(section);
  });
});

contentArea.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('[data-action="contact"]')) {
    setActiveNav('contact');
    loadSection('contact');
  }
});

loadSection('home');
