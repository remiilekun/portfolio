import { useState, useEffect } from 'react';
import { Project } from 'components/molecules';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import { works } from 'data/works';
import { OutlineButton } from 'components/atoms';
import Slide from 'react-reveal/Slide';
import styled from '@emotion/styled';

const ProjectsWrapper = styled(Flex)`
  flex-direction: column;

  .react-reveal {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

const Projects = ({ showAll }) => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const currentCursor = page * limit;

  useEffect(() => {
    if (showAll) {
      setData([...works]);
      setMore(false);
    } else {
      setData([...works.slice(0, currentCursor)]);
      setMore(works.length > currentCursor);
    }
  }, [showAll]);

  const loadMore = () => {
    const nextCursor = (page + 1) * limit;
    setData(prev => [...prev, ...works.slice(currentCursor, nextCursor)]);
    setPage(v => v + 1);
    setMore(works.length >= nextCursor);
  };

  return (
    <ProjectsWrapper>
      {data.map(({ id, ...project }, i) => (
        <Slide bottom key={id}>
          <Project {...project} imageOrder={i % 2} />
        </Slide>
      ))}

      {more && (
        <Box onClick={loadMore} width="1" py="2rem" display="flex" alignItems="center" justifyContent="center">
          <OutlineButton fontSize="normal" size="large">
            View More
          </OutlineButton>
        </Box>
      )}
    </ProjectsWrapper>
  );
};

Projects.propTypes = {
  showAll: PropTypes.bool,
};

Projects.defaultProps = {
  showAll: false,
};

export default Projects;
