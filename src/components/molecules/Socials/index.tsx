import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';
import { SocialItem } from './SocialItem';

export const Socials = () => {
  return (
    <aside className="z-[1] flex flex-row items-center justify-center bg-steel py-4 md:fixed md:top-0 md:bottom-0 md:left-0 md:w-20 md:flex-col md:px-6">
      <SocialItem href="https://www.github.com/remiilekun" label="Github Link">
        <GithubIcon />
      </SocialItem>
      <SocialItem href="https://www.linkedin.com/in/remiilekun" label="Linkedin Link">
        <LinkedinIcon />
      </SocialItem>
      <SocialItem href="https://twitter.com/remiilekun" label="Twitter Link">
        <TwitterIcon />
      </SocialItem>
      <SocialItem href="https://www.instagram.com/remiilekun" label="Instagram Link">
        <InstagramIcon />
      </SocialItem>
    </aside>
  );
};
