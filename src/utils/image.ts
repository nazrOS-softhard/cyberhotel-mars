import type { CSSProperties } from 'react';

/**
 * Все изображения на сайте подтягиваются динамически по ключевым словам —
 * никаких захардкоженных файлов в /public. Это позволяет:
 *  - не хранить тяжёлые ассеты в репозитории
 *  - менять "тематику" картинки, просто меняя запрос
 *  - иметь рабочий, закрытый (complete) сайт сразу после git clone
 *
 * Источник — Unsplash Source (бесплатный, без API-ключа).
 * seed делает картинку стабильной для одного и того же query+id,
 * чтобы при перерендере она не "прыгала".
 */
export function dynamicImage(
  query: string,
  opts: { width?: number; height?: number; seed?: string | number } = {}
): string {
  const { width = 1200, height = 800, seed = query } = opts;
  const q = encodeURIComponent(query.trim());
  // sig привязывает картинку к seed, чтобы она не менялась между рендерами
  const sig = Array.from(String(seed)).reduce((a, c) => a + c.charCodeAt(0), 0);
  return `https://source.unsplash.com/${width}x${height}/?${q}&sig=${sig}`;
}

/** Фолбэк-градиент (используется, если картинка не прогрузилась) */
export function imageFallbackStyle(): CSSProperties {
  return {
    background:
      'linear-gradient(135deg, #141417 0%, #1c1414 50%, #0A0A0C 100%)',
  };
}
