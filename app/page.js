import Contact from "./(components)/Contact/Contact";
import Count from "./(components)/Count/Count";
import Hero from "./(components)/Hero/Hero";
import Services from "./(components)/Services/Services";
import Testimonials from "./(components)/Testimonials/Testimonials";

export default function Home() {
  return (
  <main>
    <Hero />
    <Services />
    <Contact />
    <Count />
    <Testimonials />
  </main>
  )
}
