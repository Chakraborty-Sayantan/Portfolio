import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { inter } from "@/lib/fonts"
import { DotPattern } from "@/components/ui/dot-pattern"
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sayantan Chakraborty | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative">
            <DotPattern 
              width={20}
              height={20}
              className="absolute inset-0 h-full w-full [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.15]"
            />
            {children}
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
