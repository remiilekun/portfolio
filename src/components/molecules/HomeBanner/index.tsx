import React from 'react';
import Link from 'next/link';
import { Button, Content, Typography } from '@/components/atoms';
import { RightArrowIcon } from '@/components/icons';
import { HomeBannerType } from '@/types/common';

type HomeBannerProps = {
  data?: HomeBannerType;
};

export const HomeBanner = ({ data }: HomeBannerProps) => {
  return (
    <section
      className={
        'bg-[url(/assets/img/coding-i.png)] bg-no-repeat ' +
        'bg-[length:28rem] bg-[position:calc(100%_+_4rem)_0] pb-60 pt-96 ' +
        'sm:bg-[position:calc(100%_+_2rem)_0] ' +
        'md:bg-[length:30rem] md:bg-[position:calc(100%_+_1rem)_0] md:pb-40 md:pt-32 ' +
        'lg:bg-[length:40rem] lg:bg-[position:calc(100%)_5rem] lg:pb-60 lg:pt-72 ' +
        'xl:bg-[length:70rem] xl:bg-[position:calc(100%)_0] xl:pb-120 xl:pt-100'
      }
    >
      <Content fluid>
        <div className="flex">
          <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2">
            <Typography.Heading type="h2" className="mb-4">
              {data?.title}
            </Typography.Heading>
            <Typography.Heading type="h1" weight="bold" className="mb-12">
              {data?.subtitle}
            </Typography.Heading>
            <Typography.Paragraph
              color="primary"
              className="mb-12 max-w-[50rem] leading-[1.6] md:max-w-[40rem] lg:max-w-[50rem]"
            >
              {data?.description}
            </Typography.Paragraph>
            <Button
              variant="outline"
              color="white"
              as={Link}
              href="#contact"
              fontSize="small"
              size="large"
              className="nl"
            >
              Say Hello
              <RightArrowIcon style={{ marginLeft: '1.5rem' }} />
            </Button>
          </div>
        </div>
      </Content>
    </section>
  );
};
