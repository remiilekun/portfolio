import { Box } from '@theme-ui/components';
import { SectionHeader } from 'components/molecules';
import { Content } from 'components/atoms';
import Projects from './Projects';

const MyWorks = props => {
  return (
    <Box mb="15rem" {...props}>
      <Content fluid>
        <SectionHeader>My Projects</SectionHeader>
        <Projects />
      </Content>
    </Box>
  );
};

export default MyWorks;
