'use client';

import { useSyncExternalStore } from 'react';
import { Chrono, TimelineProps } from 'react-chrono';
import { useTheme } from 'next-themes';

const emptySubscribe = () => () => {};

export function Timeline({
  milestones
}: {
  milestones: TimelineProps['items'];
}) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <Chrono
      {...({
        items: milestones,
        mode: 'vertical',
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
        darkMode: { enabled: theme === 'dark' }
      } as TimelineProps)}
    />
  );
}
