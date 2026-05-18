import { Typography } from '@/components/atoms';
import { parseAndFormatCompanyDate } from '@/lib/date';
import { CompanyType } from '@/types/common';
import { CompanyHeader } from './CompanyHeader';

export const Company = ({ name, description, start_date, end_date, role }: CompanyType) => {
  const period = `${parseAndFormatCompanyDate(start_date)} ${
    end_date ? `- ${parseAndFormatCompanyDate(end_date)}` : ''
  }`;

  return (
    <div className="w-full [&+&]:mt-20">
      <CompanyHeader>{name}</CompanyHeader>
      <Typography.Paragraph size="medium" weight="bold" className="mb-6">
        {role}
      </Typography.Paragraph>
      <Typography.Paragraph size="small" weight="medium" className="mb-4 opacity-50">
        {period}
      </Typography.Paragraph>
      <ul className="list-disc list-inside">
        {description.map(x => (
          <li key={x.item} className="mb-2 font-medium leading-[1.7] text-white">
            {x.item}
          </li>
        ))}
      </ul>
    </div>
  );
};
