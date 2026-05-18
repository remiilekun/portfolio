import React from 'react';
import { Content, Typography } from '@/components/atoms';

export const ProjectsBanner = () => {
  return (
    <section
      className={
        'bg-[url(/assets/img/delivery-i.png)] bg-no-repeat ' +
        'bg-[length:28rem] bg-[position:calc(100%_+_4rem)_9rem] pb-80 pt-20 ' +
        'md:bg-[length:30rem] md:bg-[position:calc(100%_+_1rem)_50%] md:pb-32 md:pt-32 ' +
        'lg:bg-[length:40rem] lg:py-48 ' +
        'xl:bg-[length:70rem] xl:bg-[position:calc(100%)_50%] xl:py-80'
      }
    >
      <Content fluid>
        <Typography.Heading weight="bold">My Projects</Typography.Heading>
      </Content>
    </section>
  );
};
