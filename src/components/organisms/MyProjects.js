import styled from '@emotion/styled';
import { SectionHeader } from 'components/molecules';
import { Content } from 'components/atoms';
import Projects from './Projects';

const MyWorks = props => {
  return (
    <styled.section marginBottom="15rem" {...props}>
      <Content fluid>
        <SectionHeader>My Projects</SectionHeader>
        <Projects />
      </Content>
    </styled.section>
  );
};

export default MyWorks;
