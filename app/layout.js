import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: '30412 이휘성',
  description: '수행평가',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

function Navbar() {
  return(
    <div className='navbar'>
      <Link href='/'><p>홈</p></Link>
      <Link href='/list'><p>리스트</p></Link>
      <Link href='/new'><p>새로운 것</p></Link>
    </div>
  )
}