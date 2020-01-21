//@flow
import projectAOriginalImg1 from '../../assets/images/gallery/Project A/original/Gallery 1.png';
import projectAThumbnailImg1 from '../../assets/images/gallery/Project A/thumbnail/Gallery 1.png';
import projectAOriginalImg2 from '../../assets/images/gallery/Project A/original/Gallery 2.png';
import projectAThumbnailImg2 from '../../assets/images/gallery/Project A/thumbnail/Gallery 2.png';
import projectAOriginalImg3 from '../../assets/images/gallery/Project A/original/Gallery 3.png';
import projectAThumbnailImg3 from '../../assets/images/gallery/Project A/thumbnail/Gallery 3.png';

const SIDE_MENU_WIDTH = 750;

const TAGS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'React',
  'React Native',
  'UI/UX Design',
];

const PROJECTS = [
  {
    index: '0',
    name: 'Project A',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React'],
    cover: null,
    gallery: [
      {
        original: projectAOriginalImg1,
        thumbnail: projectAThumbnailImg1,
      },
      {
        original: projectAOriginalImg2,
        thumbnail: projectAThumbnailImg2,
      },
      {
        original: projectAOriginalImg3,
        thumbnail: projectAThumbnailImg3,
      },
    ],
    description: 'Description for project A',
  },
  {
    index: '1',
    name: 'Project B',
    tags: ['CSS3', 'JavaScript', 'jQuery', 'React'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project B',
  },
  {
    index: '2',
    name: 'Project C',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project C',
  },
  {
    index: '3',
    name: 'Project D',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'UI/UX Design'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project D',
  },
  {
    index: '4',
    name: 'Project E',
    tags: ['JavaScript', 'React'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project E',
  },
  {
    index: '5',
    name: 'Project F',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project F',
  },
  {
    index: '6',
    name: 'Project G',
    tags: ['HTML5', 'CSS3', 'jQuery', 'UI/UX Design'],
    cover: null,
    gallery: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
    description: 'Description for project G',
  },
];

export {TAGS, PROJECTS, SIDE_MENU_WIDTH};
