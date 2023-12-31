import { Metadata } from 'next'
import Homepage from './components/modules/Homepage'
import Navbar from './components/ui/Navbar'
import { Raleway } from 'next/font/google'
import Members from './components/modules/Members'
import Sidebar from './components/ui/Sidebar'
import Partners from './components/modules/Partners'
import Products from './components/modules/Products'
import Solutions from './components/modules/Solutions'
import Messenger from './components/ui/Messenger'
import VideoOverlay from './components/ui/VideoOverlay'
import Footer from './components/ui/Footer'
import { showOverlay } from './utils/helpers'

export const metadata: Metadata = {
  title: 'ETRACS',
  description: 'Etracs Landing Page',
}

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600' ,'700'],
  style: ['normal'],
  display: 'swap',
});

export default function Home() {

  return (
    <>
      <VideoOverlay/>
      <main className={`text-slate-700 ${raleway.className}`}>
        <Navbar isPage={false} addClasses='fixed' compName='' />
        <Sidebar />
        <Homepage />
        <Members />
        <Partners />
        <Products />
        <Solutions />
        <Footer />
        <Messenger />
      </main>
    </>
    
  )
}
