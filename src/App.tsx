import { RouterProvider, useRouter } from './lib/router'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Certifications } from './pages/Certifications'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'

function Routes() {
  const { path } = useRouter()

  if (path === '/' || path === '') return <Home />
  if (path === '/about') return <About />
  if (path === '/services') return <Services />
  if (path.startsWith('/services/')) return <ServiceDetail id={path.split('/')[2] || ''} />
  if (path === '/certifications') return <Certifications />
  if (path === '/careers') return <Careers />
  if (path === '/contact') return <Contact />
  return <Home />
}

function App() {
  return (
    <RouterProvider>
      <Preloader />
      <Navbar />
      <Routes />
      <Footer />
      <WhatsAppButton />
    </RouterProvider>
  )
}

export default App
