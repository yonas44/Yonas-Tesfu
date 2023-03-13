import { cardContainer } from './card';
import { displayModal } from './displayModal';

export function displayProjects(list, projects) {
  cardContainer.map((cards, index) => {
    const card = document.createElement('div');
    card.className = `cards ${cardContainer[index].title}`;
    const projectPic = document.createElement('div');
    projectPic.addEventListener('click', () => displayModal(index, projects));
    projectPic.id = 'project-pic';
    const projImage = new Image();
    projImage.src = projects[index];
    projectPic.appendChild(projImage);
    const count = document.createElement('span');
    count.id = 'project-count';
    count.innerHTML = index + 1;
    const title = document.createElement('h3');
    title.innerHTML = cards.title;
    const desc = document.createElement('div');
    desc.className = 'description toggle-off';
    desc.id = `index_${index}`;
    const projInfo = document.createElement('p');
    projInfo.id = 'proj-info';
    projInfo.innerHTML = cards.text;
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    cardContainer[index].languages.map((lang) => {
      const language = document.createElement('span');
      language.innerHTML = lang;
      cardInfo.appendChild(language);
    });
    const links = document.createElement('div');
    links.className = 'modal-links';
    const sourceBtn = document.createElement('a');
    sourceBtn.className = 'modal-btn';
    sourceBtn.setAttribute('href', cardContainer[index].Links[0]);
    const sourceText = document.createElement('span');
    sourceText.innerHTML = 'Source code';
    const liveBtn = document.createElement('a');
    liveBtn.setAttribute('href', cardContainer[index].Links[1]);
    const liveText = document.createElement('span');
    liveText.innerHTML = 'live Demo';
    liveBtn.className = 'modal-btn';
    sourceBtn.append(sourceText);
    liveBtn.append(liveText);
    links.append(sourceBtn, liveBtn);

    desc.append(cardInfo, projInfo, links);
    card.append(projectPic, count, title, desc);
    list.appendChild(card);
  });
}
