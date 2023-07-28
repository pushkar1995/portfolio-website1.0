const allProjects = [
  {
    id: 1,
    title: 'Multi Post Stories',
    image: '../images/popup-image.png',
    description:
        `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 2,
    title: 'Professional Art Printing',
    image: '../images/popup-image.png',
    description:
        'General Card One Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 3,
    title: 'Data Dashboard Healthcare',
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 4,
    title: 'Website Portfolio',
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 5,
    title: 'Professional Art Printing Data More',
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 6,
    title: 'Data Dashboard Healthcare',
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
  {
    id: 7,
    title: 'Website Portfolio',
    image: '../images/popup-image.png',
    description:
        `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    liveLink: '',
    sourceLink: 'https://github.com/pushkar1995/portfolio-website1.0',
  },
];

allProjects.forEach((project) => {
  document.getElementById('projectmodal').innerHTML = `
  <div class="project-details-popup">
    <div class="project-details-inner">
        <div class="project-details-header">
            <div class="pop-head">
                <h3 class="popup-heading">${project.title}</h3>
                <i id="close-icon-detail" alt="icon"></i>
            </div>
            <div>
              <ul class="tech-list">
                <li class="css-button">${project.technologies[0]}</li>
                <li class="html-button">${project.technologies[1]}</li>
                <li class="bootstrap-button">${project.technologies[2]}</li>
              </ul>
            </div>
        </div>
        <div class="popup-content">
            <img src=${project.image} alt="Portfolio snapshot image">
            <div class="popup-lower">
                <p>${project.description}</p>
                <div class="modal-buttons">
                    <div class="btn-details"><a target="_blank" href=${project.liveLink}>See Live</a><i class="live-icon"></i></div>
                    <div class="btn-details"><a target="_blank" href=${project.sourceLink}>See Source</a><i class="source-icon"></i></div>
                </div>
            </div>
        </div>
    </div>
  </div>
  `;
});

window.onload = function load() {
  const projectsSection = document.querySelector('.projects-section');
  const section = document.createElement('div');
  section.setAttribute('class', 'projects-card-container');
  section.setAttribute('id', 'card-section');
  section.innerHTML = `
            <div class="topcard-header-container">
                <h2 class="myRecentWorksHeading">My Recent Works</h2>
                <hr class="section-break-firstline" />
            </div>
            <div id="multipost-body" class="topcard-multipost-body">
                <img class="multipost-img-placeholder" src="images/PortfolioPhoto1.png" alt="MultiPost-PlaceholderImg" />
                <div class="multipost-section">
                    <h3 id="multipost-heading" class="multiPostStories-heading">Multi-Post Stories</h3>
                    <p id="multipost-details-section" class="multipost-info-section">
                        A daily selection of privately personalized reads; no accounts or
                        sign-ups required. has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a standard dummy text.
                    </p>
                    <ul class="multipost-tech-buttons">
                        <li class="css-button">CSS</li>
                        <li class="html-button">HTML</li>
                        <li class="bootstrap-button">Bootstrap</li>
                        <li class="ruby-button">Ruby</li>
                    </ul>
                    <button id="button-1" class="topcontainer-seeproject-button">See Project</button>
                </div>
            </div>

        <!-- General Cards Part -->
        <div class="general-card-container">
            <!-- General Card -->
            <div class="general-card-one" id="cardA">
                <div class="g-card-image1" id="g-card-imageA"></div>
                <button id="button-2" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 2 -->
            <div class="general-card-two">
                <div class="g-card-image2" id="g-card-imageB"></div>
                <h3 class="card-heading">The Jungle Maniacs</h3>
                <p class="card-text-segment">
                  The Jungle Maniacs is a real community of like minded people who loves to explore nature
                </p>
                <ul class="card-buttons" id="card-tech-list2">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-3" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 3 -->
            <div class="general-card-three">
                <div class="g-card-image3" id="g-card-imageC"></div>
                <h3 class="card-heading">Website Portfolio</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list3">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-4" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 4 -->
            <div class="general-card-four">
                <div class="g-card-image4" id="g-card-imageD"></div>
                <h3 class="card-heading">Professional Art Printing Data More</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list4">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-5" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 5 -->
            <div class="general-card-five">
                <div class="g-card-image5" id="g-card-imageE"></div>
                <h3 class="card-heading">Data Dashboard Healthcare</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list5">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-6" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 6 -->
            <div class="general-card-six">
                <div class="g-card-image6" id="g-card-imageF"></div>
                <h3 class="card-heading">Website Portfolio</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list6">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-7" class="gc-project-button">See Project</button>
            </div>
  `;
  projectsSection.appendChild(section);

  const seeProjects = [];
  allProjects.forEach((project, index) => seeProjects.push(document.getElementById(`button-${index + 1}`)));
  let id;
  seeProjects.forEach((el) => {
    el.addEventListener('click', (e) => {
      id = e.target.id;
      document.querySelector('.popup-heading').textContent = allProjects[id.slice(-1) - 1].title;

      document.querySelector('.project-details-popup').classList.toggle('show');
      document.getElementById('headline-container').scrollIntoView();
      document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
      document.querySelector('.project-details-popup').classList.toggle('show');
    });
  });

  document.querySelector('#close-icon-detail').addEventListener('click', () => {
    document.querySelector('.project-details-popup').classList.toggle('show');
    document.querySelector('#close-icon-detail').classList.toggle('show');
    if (id === 'button-1') {
      document.getElementById(id).focus();
    } else {
      const section = document.querySelector('#card-section');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
};