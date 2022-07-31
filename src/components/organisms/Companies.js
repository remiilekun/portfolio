import { companies } from 'data/companies';
import { Company } from 'components/molecules';
import { Flex, Box } from '@theme-ui/components';

const Companies = () => {
  return (
    <Flex>
      <Box sx={{ maxWidth: '65rem' }}>
        {companies.map(({ id, ...company }) => (
          <Company key={id} {...company} />
        ))}
      </Box>
    </Flex>
  );
};

export default Companies;
