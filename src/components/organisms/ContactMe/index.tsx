'use client';
import React from 'react';
import { SectionHeader } from '@/components/molecules';
import { Content, Typography } from '@/components/atoms';
import ContactForm from '../ContactForm';

const ContactMe = (props: React.ComponentPropsWithoutRef<'section'>) => {
  return (
    <section
      className={
        'mb-20 ' +
        'md:bg-[url(/assets/img/support-i.png)] md:bg-no-repeat ' +
        'md:bg-[length:30rem] md:bg-[position:calc(100%_+_10rem)_50%] ' +
        'lg:bg-[length:40rem] lg:bg-[position:calc(100%)_50%] ' +
        'xl:bg-[length:50rem] xl:bg-[position:calc(100%_-_4rem)_35%]'
      }
      {...props}
    >
      <Content fluid>
        <SectionHeader>Let us talk</SectionHeader>

        <div className="flex">
          <div className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2">
            <Typography.Paragraph size="medium" className="mb-8 leading-[1.7]">
              Feel free to reach out to me if you have any question or if you&apos;ll like to create magic with me.
            </Typography.Paragraph>

            <div className="max-w-[50rem]">
              <ContactForm />
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default ContactMe;
