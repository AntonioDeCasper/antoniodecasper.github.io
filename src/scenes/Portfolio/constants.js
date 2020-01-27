//@flow
//Portfolio project
import coverPortfolio from '../../assets/images/projects/portfolio/cover.png';
import origPortfolioPic1 from '../../assets/images/projects/portfolio/picture_1.png';
import origPortfolioPic2 from '../../assets/images/projects/portfolio/picture_2.png';
import origPortfolioPic3 from '../../assets/images/projects/portfolio/picture_3.png';
import thumbPortfolioPic1 from '../../assets/images/projects/portfolio/thumbnail/picture_1.png';
import thumbPortfolioPic2 from '../../assets/images/projects/portfolio/thumbnail/picture_2.png';
import thumbPortfolioPic3 from '../../assets/images/projects/portfolio/thumbnail/picture_3.png';

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
    name: 'My personal site',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'UI/UX Design'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for project A',
  },
  {
    index: '1',
    name: 'Project No Image',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
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
    name: 'Test Project',
    tags: ['HTML5', 'CSS3', 'jQuery'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for Test Project',
  },
  {
    index: '3',
    name: 'Another Test Project',
    tags: ['HTML5', 'CSS3', 'jQuery', 'UI/UX Design'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for Another Test Project',
  },
  {
    index: '4',
    name: 'Simple Test Project',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for Simple Test Project',
  },
  {
    index: '5',
    name: 'Mobile Test Project',
    tags: ['React Native, JavaScript'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for Mobile Test Project',
  },
  {
    index: '6',
    name: 'Landing Page Test Project',
    tags: ['HTML5', 'CSS3', 'jQuery'],
    cover: coverPortfolio,
    gallery: [
      {
        original: origPortfolioPic1,
        thumbnail: thumbPortfolioPic1,
      },
      {
        original: origPortfolioPic2,
        thumbnail: thumbPortfolioPic2,
      },
      {
        original: origPortfolioPic3,
        thumbnail: thumbPortfolioPic3,
      },
    ],
    description: 'Description for Landing Page Test Project',
  },
];

export {TAGS, PROJECTS, SIDE_MENU_WIDTH};
