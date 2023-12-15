import { Inter } from 'next/font/google'
import './ui/globals.css'
import './globals.css'
import styles from './styles.module.css'
// additional css
import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/magnific-popup.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/dripicons.css'
import './assets/css/slick.css'
import './assets/css/meanmenu.css'
import './assets/css/default.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AFEXHUB',
  description: '',
}

export default function LandingLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles}>{children}</body>
    </html>
  )
}