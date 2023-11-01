import React from 'react';
import Navbar from '../Components/Navbar';
import Section from '../Components/Section';
import Card from '../Components/Card';
import Banner from '../Components/Banner';
import Svgbanner from '../Components/Svgbanner';
import Layout from '../Components/Layout';
import Testimonials from '../Components/Testimonials';
import App from '../Components/App';
import Footer from '../Components/Footer';

const Home = () => {
  return (

    <div>

      <section className='max-width'>
        <div>
          <Navbar />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Section />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Card />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Banner />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Svgbanner />
        </div>
      </section>

      <section className='max-width'>
        <h2 className='include'>Features Include</h2>
      </section>

      <section>
        <div>
          <Layout />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Testimonials />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <App />
        </div>
      </section>

      <section className='max-width'>
        <div>
          <Footer/>
        </div>
      </section>

    </div>
  )
}

export default Home