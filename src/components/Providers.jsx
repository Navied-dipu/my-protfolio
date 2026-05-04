'use client';

import { ThemeProvider } from 'next-themes';
import { ReactLenis } from 'lenis/react';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root options={{ 
        lerp: 0.05, 
        duration: 1.5,
        smoothWheel: true 
      }}>
        {children}
      </ReactLenis>
    </ThemeProvider>

  );
}
