'use client';

import { Chrono } from 'react-chrono';
import { TimelineProps } from 'react-chrono/dist/models/TimelineModel';
import { useTheme } from 'next-themes';

export function Timeline({
  milestones
}: {
  milestones: TimelineProps['items'];
}) {
  const { theme } = useTheme();
  return (
    <Chrono
      {...({
        items: milestones,
        mode: 'VERTICAL',
        flipLayout: true,
        hideControls: true,
        useReadMore: false,
        disableClickOnCircle: true,
        disableTimelinePoint: true,
        disableAutoScrollOnClick: true,
        disableNavOnKey: true,
        mediaSettings: {
          imageFit: 'contain'
        },
        mediaHeight: 100,
        theme: {
          primary: 'black',
          secondary: 'transparent'
        },
        classNames: {
          cardText: '!items-start',
          cardSubTitle: '!text-lg',
          title: '!break-word'
        },
        darkMode: theme === 'dark'
      } as TimelineProps)}
    />
  );
}
