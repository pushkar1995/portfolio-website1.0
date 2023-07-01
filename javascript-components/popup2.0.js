const workSection = document.getElementById('work-section');
const modal = document.getElementById('modals-container');

const cardInfos = {
  title: [
    'Multi-Post Stories',
    'Data Dashboard Healthcare',
    'Website Portfolio',
    'Profesional Art Printing Data More',
    'My Recent Works',
  ],
  image: [
    '../images/desktop-img/general1-imgholder.png',
    '../images/desktop-img/general2-imgholder.png',
    '../images/desktop-img/general3-imgholder.png',
    '../images/GeneralCardImgPlaceholder.png',
    '../images/desktop-img/general2-imgholder.png',
    '../images/desktop-img/general3-imgholder.png',
    '../images/popup-image.png',
    '../images/icons/export-icon.png',
    '../images/media-icons/github-icon.svg',
  ],
  description: [
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  ],
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'Ruby on Rails'],
  button: [
    'See project',
    'See live',
    'See source',
  ],
  live: '',
  source: '',
};

const titleArr = cardInfos.title;
const imageArr = cardInfos.image;
const descriptionArr = cardInfos.description;
const technologiesArr = cardInfos.technologies;
// const buttonArr = cardInfos.button;

let mainCard = '';
mainCard += `
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
<button id="button-p2" data-modal-target="#modal1" class="gc-project-button">See Project</button>
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
workSection.innerHTML = mainCard;

let modals = '';
modals += `
<div id="modal1" class="project-details-popup">
<div class="project-details-inner">
    <div class="project-details-header">
        <div class="pop-head">
            <h3 class="popup-heading">${titleArr[0]}</h3>
            <i id="close-icon-detail" alt="icon"></i>
        </div>
        <div>
          <ul class="tech-list">
            <li>${technologiesArr[1]}</li>
            <li>${technologiesArr[2]}</li>
            <li>${technologiesArr[4]}</li>
          </ul>
        </div>
    </div>
    <div class="popup-content">
        <img src=${imageArr[6]} alt="Portfolio snapshot image">
        <div class="popup-lower">
            <p>$${descriptionArr[2]}</p>
            <div class="modal-buttons">
                <div class="btn-details"><a target="_blank" href=${cardInfos.live}>See Live</a><i class="live-icon"></i></div>
                <div class="btn-details"><a target="_blank" href=${cardInfos.source}>See Source</a><i class="source-icon"></i></div>
            </div>
        </div>
    </div>
</div>
</div>
`;

modal.innerHTML = modals;

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});