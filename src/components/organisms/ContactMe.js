import styled from '@emotion/styled';
import { SectionHeader } from 'components/molecules';
import { Content, Typography } from 'components/atoms';
import { Flex, Box } from 'rebass';
import ContactForm from './ContactForm';
import supportIllustration from '../../../public/assets/img/support-i.png';

const Wrapper = styled.section`
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.md`
  background-image: url(${supportIllustration});
  background-repeat: no-repeat;
  background-position: calc(100% + 10rem) 50%;
  background-size: 30rem;
  `}

  ${({ theme }) => theme.mq.lg`
  background-position: calc(100%) 50%;
  background-size: 40rem;
  `}

  ${({ theme }) => theme.mq.xl`
  background-position: calc(100% - 4rem) 35%;
  background-size: 50rem;
  `}

`;

const Subtitle = styled(Typography.Paragraph)`
  font-size: ${({ theme }) => theme.font.size.medium};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ContactMe = props => {
  return (
    <Wrapper {...props}>
      <Content fluid>
        <SectionHeader>Let us talk</SectionHeader>

        <Flex>
          <Box width={[1, 1, 10 / 12, 8 / 12, 6 / 12]}>
            <Subtitle>
              Feel free to reach out to me if you have any question or if you'll like to create magic with me.
            </Subtitle>

            <Box maxWidth="50rem">
              <ContactForm />
            </Box>
          </Box>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default ContactMe;
