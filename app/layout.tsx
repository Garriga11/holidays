import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#8d1515ff",
}

export const metadata: Metadata = {
  title: 'Merry Christmas 2025',
  description:
    'Wishing you a Merry Christmas and Happy Holidays!',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white dark:bg-black font-sans antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full">
            <div className="relative mx-auto w-full max-w-screen-lg flex-1 px-4">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
