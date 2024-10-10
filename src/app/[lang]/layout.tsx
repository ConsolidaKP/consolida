import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { i18n } from '@/config/i18n'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: {
      template: '%s | Mi Aplicación Multilenguaje',
      default: 'Mi Aplicación Multilenguaje',
    },
    description: 'Una aplicación Next.js con soporte para múltiples idiomas',
    alternates: {
      canonical: '/',
      languages: {
        'es-ES': '/es',
        'en-US': '/en',
      },
    },
  }
}


export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <header>
          {/* Aquí puedes agregar un componente de navegación o encabezado */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Aquí puedes agregar un componente de pie de página */}
        </footer>
      </body>
    </html>
  )
}