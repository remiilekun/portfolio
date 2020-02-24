import { companies } from 'data/companies';
import { Company } from 'components/molecules';
import { Flex, Box } from 'rebass';

const Companies = () => {
  return (
    <Flex>
      <Box maxWidth="65rem">
        {companies.map(({ id, ...company }) => (
          <Company key={id} {...company} />
        ))}
      </Box>
    </Flex>
  );
};

export default Companies;
