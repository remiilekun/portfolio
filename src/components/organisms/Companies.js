import { companies } from 'data/companies';
import { Company } from 'components/molecules';
import { Flex, Box } from 'rebass';

const Companies = () => {
  return (
    <Flex>
      <Box maxWidth="65rem" px="1rem">
        {companies.map(({ id, ...company }) => (
          <Company id={id} {...company} />
        ))}
      </Box>
    </Flex>
  );
};

export default Companies;
