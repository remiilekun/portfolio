import { FindmaidsIcon, UduXIcon, Chiji14XchangeIcon, GitExplorerIcon } from 'components/icons';

export const works = [
  {
    coverImage: '/assets/img/projects/udux.jpg',
    description:
      "uduX is a music streaming platform. I worked with a team of software engineers on uduX, by translating designs and consuming apis, my role was to build applications that enables ease of use of streaming and accessibility of user's uduX data for both platforms, web and mobile( iOS ).",
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
      'A web app used to book cleaning appointments by customers while the admin are able to manage their staffs. I built the UI components using the designs handed over to me and also handled the UI logic functionality of the app.',
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
    description:
      'Gitexplorer is an open source project created by Summitech to help people with git commands. While working with a team of a designer and a backend engineer, I was tasked with creating the UI component and also deliberated with the backend engineer on a performant logic of data management.',
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
    description:
      'A bitcoin and gift card trading application. I translated the designs assigned to me to pixel perfect mobile screens, frontend logic, consumed apis, and I also worked on a chat system using socket.io to enable instant messaging between and user and an agent to allow easy and instant trades.',
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
