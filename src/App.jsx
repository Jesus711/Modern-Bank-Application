import styles from './styles';
import {  Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components';

// Can remove {} if the component only returns JSX
const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>  {/* styles allows to CRTL Click to see the CSS in the styles.js file*/}
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Hero Section: Main part: Called Hero as it is the landing part: Everything that is visible as soon as the page is loaded */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  )

export default App;