import { Flex, Box } from '@theme-ui/components';
import { Company } from 'components/molecules';
import { parseCompanyDate } from 'lib/date';

const Companies = ({ companies }) => {
  return (
    <Flex>
      <Box sx={{ maxWidth: '65rem' }}>
        {companies
          .sort((a, b) => +parseCompanyDate(b.start_date) - +parseCompanyDate(a.start_date))
          .map(({ id, ...company }) => (
            <Company key={id} {...company} />
          ))}
      </Box>
    </Flex>
  );
};

export default Companies;
