import { useState } from 'react';
import { dynamicImage, imageFallbackStyle } from '../utils/image';

interface Props {
  query: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  seed?: string | number;
}

export default function SmartImage({ query, alt, className, width, height, seed }: Props) {
  const [failed, setFailed] = useState(false);
  const src = dynamicImage(query, { width, height, seed });

  if (failed) {
    return (
      <div
        className={className}
        style={imageFallbackStyle()}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
