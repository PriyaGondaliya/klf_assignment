import React from 'react'
import homeImg from '../images/images/j7.jpeg';
import ring from '../images/images/ring.webp';
import neck from '../images/images/j4.webp';
import earring from '../images/images/earring.webp';
import bracelet from '../images/images/bracelet.jpeg';
import "../styles/home.scss";
import Card from './Card';
import Footer from './Footer';
const Home = () => {
  return (
    <section className='home' id='home'>
    <div>
    <img src={homeImg} alt="" className='home__banner'/>
   
    </div>
    <div className="categories">
        <div className="categories__mainDiv">
          <h2>SHOPE BY STYLE</h2>
          <div className="categories__option">
            <Card img={ring} name="RINGS"/>
            <Card img={neck} name="NECKLACES"/>
            <Card img={earring} name="EARRINGS"/>
            <Card img={bracelet} name="BRACELETS"/>
           
          </div>
        </div>
      </div>
      <div>
      <div className="about__mainDiv">
          <h2>OUR STORY</h2>
          <div className="about__div">
            <p>We are one of the oldest business families in India with a family legacy of over a century in business, starting from as early as 1908. Started for the noble cause of nation-building and self-sustenance in a pre-independent Canada, the forefathers believed ethical, honest and transparent business practices should form the foundation of the group.
           </p><br/><p> We at Jewels have always believed that the customer needs to be educated and aware, as this is the first step in preventing malpractices in business. As a part of this philosophy we have conducted several campaigns over the years, to educate customers about purity, pricing and other aspects. These efforts of Kalyan have gone a long way in the industry, that is now becoming more transparent towards the customer’s interests. We believe that this is our legacy to the industry.
            </p>
           
          </div>
        </div>
        <Footer/>
      </div>
   </section>

  )
}

export default Home