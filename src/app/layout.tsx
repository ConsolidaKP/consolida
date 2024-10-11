import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/styles/globalStyles'
import { AuthProvider } from '@/contexts/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Aplicación Multilenguaje',
  description: 'Una aplicación Next.js con soporte para múltiples idiomas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AuthProvider>
            {children}
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
