import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/Theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio with smooth animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{
          backgroundColor: 'hsl(var(--background))',
          color: 'hsl(var(--muted-foreground))',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
