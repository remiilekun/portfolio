import { FindmaidsIcon, UduXIcon, Chiji14XchangeIcon, GitExplorerIcon } from 'components/icons';

export const projects = [
  {
    coverImage: '/assets/img/projects/sharply.png',
    description:
      'A fully automated logistics solution that allows small and medium scale logistics company manage their riders and customer.',
    name: 'Sharply Africa',
    technologies: ['html', 'react'],
    link: {
      web: 'https://www.sharply.africa/',
    },
    id: 'proj-sharply',
  },
  {
    coverImage: '/assets/img/projects/npf.jpg',
    description:
      'The NPF Microfinance Banking Mobile App allows you to bank on the go. Carryout all banking related activities from the comfort of your mobile phone.',
    name: 'NPF MFB',
    technologies: ['react', 'reactNative'],
    link: {
      ios: 'https://apps.apple.com/ng/app/npf-microfinance-bank/id1546736456',
      android: 'https://play.google.com/store/apps/details?id=com.npfmicrofinancebank.ibank',
    },
    id: 'proj-npf',
  },
  {
    coverImage: '/assets/img/projects/swap.jpg',
    description: 'A community to aid easy barter and foster relationships between game lovers.',
    name: 'swapurgame',
    technologies: ['html', 'react'],
    link: {
      web: 'https://www.swapurgame.com/',
    },
    id: 'proj-swap',
  },
  {
    coverImage: '/assets/img/projects/udux.jpg',
    description: "uduX is Nigeria's first indigenous subscription-based music store and streaming service platform.",
    logo: UduXIcon,
    name: 'uduX',
    technologies: ['html', 'react', 'reactNative', 'swift'],
    link: {
      web: 'https://udux.com',
      ios: 'https://apps.apple.com/us/app/udux/id1372897101',
    },
    id: 'proj-udux',
  },
  {
    coverImage: '/assets/img/projects/find-maids.jpg',
    description:
      'A web app used to book cleaning appointments by customers while the admin are able to manage their staffs.',
    logo: FindmaidsIcon,
    name: 'Find Maids',
    technologies: ['html', 'react'],
    link: {
      web: 'https://findmaids.co.uk',
    },
    id: 'proj-find-maids',
  },
  {
    coverImage: '/assets/img/projects/git-explorer.jpg',
    description: 'Gitexplorer is an open source project created by Summitech to help people with git commands.',
    logo: GitExplorerIcon,
    name: 'Git Explorer',
    technologies: ['html', 'react'],
    link: {
      web: 'https://gitexplorer.com',
    },
    id: 'proj-git-explorer',
  },
  {
    coverImage: '/assets/img/projects/chiji.png',
    description: 'A bitcoin and gift card trading application.',
    logo: Chiji14XchangeIcon,
    name: 'Chiji14xchange',
    technologies: ['react', 'reactNative'],
    link: {
      ios: 'https://apps.apple.com/ng/app/chiji14xchange/id1459183957',
      android: 'https://play.google.com/store/apps/details?id=com.chiji14xchange',
    },
    id: 'proj-chiji',
  },
];
