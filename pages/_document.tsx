import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect, useState } from 'react';

export default function Document() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.addEventListener('click', () => {
      setTheme((prev) => !prev);
    });
    return () =>
      document.documentElement.removeEventListener('click', () => {
        setTheme((prev) => !prev);
      });
  }, [theme]);

  return (
    <Html lang='en' className={theme ? '_dark' : 'dark'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
