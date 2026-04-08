'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type TypingEffectProps = {
  text: string;
  speed?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function TypingEffect({
  text,
  speed = 50,
  className,
  as: Tag = 'span',
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);

    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Tag className={className} aria-label={text}>
      {displayed}
      <span
        className={cn(
          'inline-block w-[3px] h-[1em] bg-white ml-1 align-middle',
          done ? 'animate-[blink_1s_step-end_infinite]' : ''
        )}
      />
    </Tag>
  );
}
