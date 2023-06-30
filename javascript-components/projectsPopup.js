const allProjects = [
  {
    id: 1,
    name: 'Multi Post Stories',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 2,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 4,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 6,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 7,
    name: 'Professional Art Printing Data',
    technologies: ['CSS', 'HTML', 'BOOTSTRAP', 'RUBY ON RAILS'],
    image: '../images/popup-image.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    liveLink: '',
    sourceLink: '',
  },
];

allProjects.forEach((project) => {
  document.getElementById('project-modal').innerHTML = `
  <div class="project-details-popup">
    <div class="project-details-inner">
        <div class="project-details-header">
            <div class="pop-head">
                <h3 class="popup-heading">${project.name}</h3>
                <i id="close-icon-detail" alt="icon"></i>
            </div>
            <div>
              <ul class="tech-list">
                <li>${project.technologies[0]}</li>
                <li>${project.technologies[1]}</li>
                <li>${project.technologies[2]}</li>
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
                    <button id="button-p1" class="topcontainer-seeproject-button">See Project</button>
                </div>
            </div>

        <!-- General Cards Part -->
        <div class="general-card-container">
            <!-- General Card -->
            <div class="general-card-one" id="cardA">
                <div class="g-card-image1" id="g-card-imageA"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list1">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p2" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 2 -->
            <div class="general-card-two">
                <div class="g-card-image2" id="g-card-imageB"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list2">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p3" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 3 -->
            <div class="general-card-three">
                <div class="g-card-image3" id="g-card-imageC"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list3">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p4" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 4 -->
            <div class="general-card-four">
                <div class="g-card-image4" id="g-card-imageD"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list4">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p5" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 5 -->
            <div class="general-card-five">
                <div class="g-card-image5" id="g-card-imageE"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list5">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p6" class="gc-project-button">See Project</button>
            </div>

            <!-- General Card 6 -->
            <div class="general-card-six">
                <div class="g-card-image6" id="g-card-imageF"></div>
                <h3 class="card-heading">Professional Art Printing Data</h3>
                <p class="card-text-segment">
                    A daily selection of privately personalized reads; no accounts or
                    sign-ups required. Has been the industry's standard.
                </p>
                <ul class="card-buttons" id="card-tech-list6">
                    <li class="btn btn-primary btn-lg">HTML</li>
                    <li class="btn btn-primary btn-lg">Bootstrap</li>
                    <li class="btn btn-primary btn-lg">Ruby</li>
                </ul>
                <button id="button-p7" class="gc-project-button">See Project</button>
            </div>
  `;
  projectsSection.appendChild(section);

  const seeProjects = [];
  allProjects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
  let id;
  seeProjects.forEach((el) => {
    el.addEventListener('click', (e) => {
      id = e.target.id;
      document.querySelector('.popup-heading').textContent = allProjects[id.slice(-1) - 1].title;

      document.querySelector('.project-details-popup').classList.toggle('show');
      document.getElementById('headline').scrollIntoView();
      document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
      document.querySelector('.project-details-popup').classList.toggle('show');
    });
  });

  document.querySelector('#close-icon-detail').addEventListener('click', () => {
    document.querySelector('.project-details-popup').classList.toggle('show');
    document.querySelector('#close-icon-detail').classList.toggle('show');
    if (id === 'projects-1') {
      document.getElementById(id).focus();
    } else {
      const section = document.querySelector('#card-section');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const cardButton1 = document.getElementById('projects-3');
  const ul1 = document.getElementById('card-tech-list1');
  const cardButton2 = document.getElementById('projects-4');
  const ul2 = document.getElementById('card-tech-list2');
  const cardButton3 = document.getElementById('projects-5');
  const ul3 = document.getElementById('card-tech-list3');
  const cardButton4 = document.getElementById('projects-6');
  const ul4 = document.getElementById('card-tech-list4');
  const cardButton5 = document.getElementById('projects-7');
  const ul5 = document.getElementById('card-tech-list5');
  const cardDiv1 = document.querySelector('general-card-two');
  const cardDiv2 = document.querySelector('general-card-three');
  const cardDiv3 = document.querySelector('general-card-four');
  const cardDiv4 = document.querySelector('general-card-five');
  const cardDiv5 = document.querySelector('general-card-six');

  const changeDefOver1 = () => {
    ul1.style.display = 'none';
    cardButton1.style.display = 'block';
  };

  const changeDefOut1 = () => {
    ul1.style.display = 'flex';
    cardButton1.style.display = 'none';
  };

  const changeDefOver2 = () => {
    ul2.style.display = 'none';
    cardButton2.style.display = 'block';
  };

  const changeDefOut2 = () => {
    ul2.style.display = 'flex';
    cardButton2.style.display = 'none';
  };

  const changeDefOver3 = () => {
    ul3.style.display = 'none';
    cardButton3.style.display = 'block';
  };

  const changeDefOut3 = () => {
    ul3.style.display = 'flex';
    cardButton3.style.display = 'none';
  };
  const changeDefOver4 = () => {
    ul4.style.display = 'none';
    cardButton4.style.display = 'block';
  };

  const changeDefOut4 = () => {
    ul4.style.display = 'flex';
    cardButton4.style.display = 'none';
  };
  const changeDefOver5 = () => {
    ul5.style.display = 'none';
    cardButton5.style.display = 'block';
  };

  const changeDefOut5 = () => {
    ul5.style.display = 'flex';
    cardButton5.style.display = 'none';
  };

  cardDiv1.addEventListener('mouseover', changeDefOver1);
  cardDiv2.addEventListener('mouseover', changeDefOver2);
  cardDiv3.addEventListener('mouseover', changeDefOver3);
  cardDiv4.addEventListener('mouseover', changeDefOver4);
  cardDiv5.addEventListener('mouseover', changeDefOver5);
  cardDiv1.addEventListener('mouseout', changeDefOut1);
  cardDiv2.addEventListener('mouseout', changeDefOut2);
  cardDiv3.addEventListener('mouseout', changeDefOut3);
  cardDiv4.addEventListener('mouseout', changeDefOut4);
  cardDiv5.addEventListener('mouseout', changeDefOut5);
};