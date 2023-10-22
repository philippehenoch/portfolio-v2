import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'

const sfMono = localFont({
  src: [
    {
      path: '../public/fonts/SFMono/SFMono-Regular.otf',
      weight: '400'
    },
  ],
  variable: '--sf-mono'
});

const calibre = localFont({
  src: [
    {
      path: '../public/fonts/Calibre/Calibre-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/fonts/Calibre/Calibre-Semibold.woff2',
      weight: '600'
    },
  ],
  variable: '--calibre'
});

export const metadata: Metadata = {
  title: "Philippe Henoch - Frontend developer",
  description: "Frontend developer specializing in building digital experiences. Currently, I'm focused on providing support and implementing the best A/B experiments for AB Tasty's clients",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfMono.variable} ${calibre.variable} font-sans bg-blue`}>{children}</body>
    </html>
  )
}
