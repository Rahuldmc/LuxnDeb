import React from 'react'
import logo from '../Assets/images/logo.png'
import Card from '../Card'
import { Link } from 'react-scroll'
import hero from '../Assets/images/hero.jpg'
import arvr from '../Assets/images/arvr.jpg'
import web from '../Assets/images/web.jpg'
import uiux from '../Assets/images/uiux.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='hero-section'>
                <img src={hero} alt='' className='hero-image'/>
                {/* <div className='hero-overlay'></div> */}
                <img src={logo} alt='/' className='logo'></img>
                <div className='hero-content'>
                    <h1>Welcome to Lux & Decibels Workshop Showcase</h1>
                    <p>Explore a World of Creativity and Innovation</p>
                    <Link to="workshop-section" smooth={true} duration={500} offset={40}>
                        <button>View Workshops</button>
                    </Link>
                </div>
            </div>
            <div className='workshop-section'>
                <p className='title'>Workshops</p>
                <h1 className='sub-title'>About Our <span>Workshops</span></h1>
                <div className='content-container'>
                    <p>In today's world, where the quality of indoor environments significantly impacts human health, productivity, and well-being, understanding the intricacies of technology becomes paramount.</p>
                    <p>Lux and Decibels, a pioneering company at the intersection of sound and light technologies, prides itself on its commitment to conduct training workshops to empower professionals and enthusiasts alike with comprehensive knowledge and practical skills.
                         With a diverse range of services including AI, AR, MR and VR solutions, Lux and Decibels recognizes the importance of equipping professionals with the knowledge and skills needed to harness the power of these cutting-edge technologies effectively.
                         Through these training workshops, Lux and Decibels aim to bridge the gap between theory and practice, equipping participants with the tools to create harmonious and functional spaces.</p>
                </div>
                <div className='event-container'>
                    <Card imageUrl={uiux} eventName="Figma Workshop"/>
                    <Card imageUrl={web} eventName="Fullstack Development Workshop"/>
                    <Card imageUrl={arvr} eventName="Unreal & Blender Workshop"/>
                </div>
                <div className="content-container">
                    <p>From engineers, architects, designers, facility managers to passionate students from any field, the workshops cater to a diverse audience, offering tailored insights and strategies relevant to each profession.
                         By delving into topics such as lighting design principles, acoustics fundamentals, and cutting-edge technologies, participants gain a holistic understanding of how to enhance environments for occupant comfort and satisfaction.</p>
                    <p>Moreover, Lux and Decibels prioritize hands-on learning experiences, providing attendees with practical exercises and demonstrations to reinforce theoretical concepts.
                         This interactive approach fosters a deeper understanding and cultivates confidence in applying newfound knowledge in real-world scenarios.
                          Ultimately, Lux and Decibels' training workshops serve as a catalyst for innovation and excellence, empowering individuals, and organizations to create spaces that inspire, engage, and elevate the human experience.</p>
                </div>
            </div>
            <div>
                <p>© Copyright <b>Lux & Decibels</b>. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Home