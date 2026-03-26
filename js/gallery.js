const images = [
  {
    preview:
      'https://i.ibb.co/twgWX58g/meeting-small.jpg',
    original:
      'https://i.ibb.co/LDQFmhT9/meeting-large.jpg',
    description: 'Meeting',
  },
  {
    preview:
      'https://i.ibb.co/CsP3TyG4/hand-with-light-bulb-small.jpg',
    original:
      'https://i.ibb.co/Q7qQZbTP/hand-with-light-bulb-large.jpg',
    description: 'Hand With Light Bulb',
  },
  {
    preview:
      'https://i.ibb.co/0y8B4G5c/design-and-develop-small.jpg',
    original:
      'https://i.ibb.co/3mJxskcV/design-and-develop-large.jpg',
    description: 'Design and Develop',
  },
  {
    preview:
      'https://i.ibb.co/kgWWR0KR/veranda-small.jpg',
    original:
      'https://i.ibb.co/PvxvVSBL/veranda-large.jpg',
    description: 'Veranda',
  },
  {
    preview:
      'https://i.ibb.co/m5fJ09Qr/lounge-small.jpg',
    original:
      'https://i.ibb.co/cSZCS38h/lounge-large.jpg',
    description: 'Lounge',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  
  if (target.nodeName !== 'IMG') 
    return;

  const largeImageURL = target.dataset.source;

  console.log(`Відкрити велике зображення: ${largeImageURL}`);
  });
  