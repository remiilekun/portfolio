import PropTypes from 'prop-types';
import { Flex, Box } from '@theme-ui/components';
import { Company } from '@/components/molecules';
import { parseCompanyDate } from '@/lib/date';

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

Companies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.array.isRequired,
      end_date: PropTypes.string,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
    }),
  ),
};
