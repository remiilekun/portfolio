'use client';
import React from 'react';
import { useMeasure } from 'react-use';
import { Fade } from 'react-awesome-reveal';
import { SectionHeader, SkillBadge } from '@/components/molecules';
import { Content, Typography, Image } from '@/components/atoms';
import { getStrapiResourceImageURL } from '@/lib/utils';
import { AboutMeType, CompanyType, SkillType } from '@/types/common';
import Companies from '../Companies';

type AboutMeProps = {
  companies?: CompanyType[];
  data?: AboutMeType;
  skills?: SkillType[];
} & React.ComponentPropsWithoutRef<'section'>;

const AboutMe = ({ companies = [], data, skills = [], ...props }: AboutMeProps) => {
  const [imageRef, { width }] = useMeasure<HTMLDivElement>();

  return (
    <section className="mb-60" {...props}>
      <Content fluid>
        <SectionHeader>{data?.title}</SectionHeader>

        <div className="[&+&]:mt-12">
          <div className="flex flex-wrap items-center -mx-6 mb-12">
            <div className="order-2 w-full max-w-full px-6 md:order-1 md:w-1/2 md:max-w-[80rem] lg:w-[58.33%] xl:w-2/3">
              <Fade direction="left" triggerOnce>
                <Typography.Paragraph size="normal" className="leading-[2]">
                  {data?.description}
                </Typography.Paragraph>
              </Fade>
            </div>

            <div className="order-1 mb-8 ml-auto w-full px-6 md:order-2 md:mb-0 md:w-1/2 lg:w-[41.67%] xl:w-1/3">
              <Fade direction="up" triggerOnce>
                <div ref={imageRef} className="mx-auto max-w-[25rem] sm:max-w-[40rem] md:max-w-[45rem]">
                  <Image
                    className="relative w-full rounded-[1rem] border border-primary"
                    imgClassName="absolute bottom-6 left-6 h-[var(--img-h)] w-full rounded-[1rem] object-cover"
                    style={{ height: `${width}px`, '--img-h': `${width}px` } as React.CSSProperties}
                    src={getStrapiResourceImageURL(data?.avatar)}
                    alt="Remi Salami"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="[&+&]:mt-12">
          <Typography.Paragraph size="big" weight="bold" className="mb-8">
            My technology stack:
          </Typography.Paragraph>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <div key={skill.id} className="w-full">
                <Fade direction="up" delay={index * 250} triggerOnce>
                  <SkillBadge skill={skill} />
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <div className="[&+&]:mt-12">
          <Typography.Paragraph size="big" weight="bold" className="mb-8">
            I have been able to create solutions for:
          </Typography.Paragraph>
          <Companies companies={companies} />
        </div>
      </Content>
    </section>
  );
};

export default AboutMe;
