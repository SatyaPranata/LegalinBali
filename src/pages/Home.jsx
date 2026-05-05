import Hero         from '../components/Hero'
// import SearchBar    from '../components/SearchBar'
import About        from '../components/About'
import Properties   from '../components/Properties'
import Services     from '../components/Services'
import Mitra from '../components/Mitra'
import CTA          from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SearchBar /> */}
      <About />
      <Properties />
      <Services />
      <Mitra />
      <CTA />
    </>
  )
}
