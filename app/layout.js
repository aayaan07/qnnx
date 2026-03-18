import AcceleratorScene from './components/ui/AcceleratorScene'
import ChatWidget from './components/ChatWidget'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'QNNX - Quantum Security',
  description: 'Guarding the Future at Quantum Scale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <AcceleratorScene />
        </div>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}