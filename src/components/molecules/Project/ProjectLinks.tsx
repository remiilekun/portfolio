import { colorHex } from '@/lib/styles';
import { Button } from '@/components/atoms';
import { RightArrowIcon, AppStoreIcon, PlayStoreIcon } from '@/components/icons';
import { ProjectType } from '@/types/common';
import { ProjectLink } from './ProjectLink';

type ProjectLinksProps = {
  link?: ProjectType['link'];
};

export const ProjectLinks = ({ link }: ProjectLinksProps) => {
  const primary = colorHex.primary;

  return (
    <ul className="flex items-center">
      {link?.web && (
        <li className="flex [&:not(:last-child)]:mr-6">
          <Button
            variant="outline"
            as={ProjectLink}
            color="primary"
            fontSize="small"
            href={link.web}
            noBorder
            rel="noopener noreferrer"
            size="small"
            target="_blank"
          >
            Visit page <RightArrowIcon className="mb-[-2px] ml-4 -rotate-45" fill={primary} stroke="5px" />
          </Button>
        </li>
      )}

      {link?.ios && (
        <li className="flex [&:not(:last-child)]:mr-6">
          <Button
            variant="outline"
            as={ProjectLink}
            color="primary"
            fontSize="small"
            href={link.ios}
            noBorder
            rel="noopener noreferrer"
            size="small"
            target="_blank"
          >
            App Store <AppStoreIcon width="1.8rem" height="1.8rem" />
          </Button>
        </li>
      )}

      {link?.android && (
        <li className="flex [&:not(:last-child)]:mr-6">
          <Button
            variant="outline"
            as={ProjectLink}
            color="primary"
            fontSize="small"
            href={link.android}
            noBorder
            rel="noopener noreferrer"
            size="small"
            target="_blank"
          >
            Play Store <PlayStoreIcon width="1.8rem" height="1.8rem" />
          </Button>
        </li>
      )}
    </ul>
  );
};
