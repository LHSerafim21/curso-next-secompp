import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Tailwind CSS",
  description: "Criando seu primeiro site usando Tailwind CSS",
};

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
