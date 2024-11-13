'use client';
import React from 'react';
import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/provider/theme-provider';
export default function Provider({ children }: { children: ReactNode }) {
 const [queryClient] = useState(() => new QueryClient());

 return (
  <ThemeProvider
   attribute="class"
   defaultTheme="system"
   enableSystem
   disableTransitionOnChange
  >
   <QueryClientProvider client={queryClient}>
    <>{children}</>
   </QueryClientProvider>
  </ThemeProvider>
 );
}
