import { Inter } from 'next/font/google'
import './ui/globals.css'
import './globals.css'
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AfexHub Admin',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles}>{children}</body>
    </html>
  )
}
