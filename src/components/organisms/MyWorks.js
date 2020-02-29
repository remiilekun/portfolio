import styled from '@emotion/styled';
import { SectionHeader } from 'components/molecules';
import { Content } from 'components/atoms';
import Projects from './Projects';

const Wrapper = styled.section`
  margin-bottom: 8rem;
`;

const MyWorks = props => {
  return (
    <Wrapper {...props}>
      <Content fluid>
        <SectionHeader>My Works</SectionHeader>
        <Projects />
      </Content>
    </Wrapper>
  );
};

export default MyWorks;
