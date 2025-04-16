
import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { Faqs } from '@/components/marketing/home/faqs';
import { Features } from '@/components/marketing/home/features';
import { Hero } from '@/components/marketing/home/hero';
import { WMap } from '@/components/marketing/home/map';
import { Included } from '@/components/marketing/home/included';
import { Productivity } from '@/components/marketing/home/productivity';
import { StartBuilding } from '@/components/marketing/home/start-building';
import { Testimonails } from '@/components/marketing/home/testimonials';

import style from './wmap.module.css'

export const metadata = { title: config.site.name, description: config.site.description } satisfies Metadata;
// Branch without TeamLeader
export default function Page(): React.JSX.Element {
  return (
    <main className={style.mapContainer}>
      <WMap />
    </main>
  );
}
