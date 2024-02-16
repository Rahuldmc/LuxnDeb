import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Event = () => {
  const location = useLocation();
  const { eventDetails } = location.state;
  console.log(eventDetails)

  useEffect(()=> {
    AOS.init({duration:1500})
  },[])

  return (
    <div className='event-content-container'>
      <div className='card-container margin-center'><img className='card-image' src={eventDetails.image} alt='' /></div>
      <div className='event-content'>
        <h1>{eventDetails.name}</h1>
        <div className='about-content' data-aos="fade-in">
          {
            eventDetails.name === 'Figma Workshop' ?
            <p>
            Figma is a powerful collaborative design tool that has gained widespread popularity in the field of user interface and user experience (UI/UX) design.
            Launched in 2016, Figma stands out for its cloud-based nature, enabling real-time collaboration among team members, regardless of their geographical locations.
            This feature facilitates seamless teamwork, allowing designers, developers, and other stakeholders to work simultaneously on the same project.
            Figma provides an intuitive interface with robust design and prototyping capabilities, making it a versatile solution for creating interactive and visually appealing digital interfaces.
            Its cloud storage ensures that design files are easily accessible and can be shared effortlessly, fostering a more efficient and collaborative design process.
            With its focus on accessibility and collaboration, Figma has become an integral tool for professionals involved in the entire product design lifecycle.
          </p>
          :
          eventDetails.name === 'Fullstack Development Workshop' ?
          <p>
            Full-stack web development using React.js and Node.js involves building dynamic and responsive web applications with a comprehensive technology stack.
            React.js, a JavaScript library maintained by Facebook, is utilized for creating interactive user interfaces, offering a component-based architecture that enhances code reusability and maintainability.
            Paired with Node.js, a server-side JavaScript runtime, developers can build scalable and efficient backend services.
            The full-stack combination of React.js and Node.js enables the creation of a unified and seamless development experience, allowing for the development of both client and server sides using a single programming language, JavaScript.
            This approach enhances collaboration between frontend and backend teams.
            React.js facilitates the creation of reusable UI components, while Node.js enables the development of fast and scalable server-side applications.
            The combination of these technologies empowers developers to craft modern, high-performance web applications with real-time capabilities, making it a popular choice for building versatile and robust full-stack solutions.
          </p>
          :
          <>
          <p style={{marginBottom:'15px'}}>
            Blender and Unreal Engine form a powerful combination for AR/VR development, offering a comprehensive solution for creating immersive and interactive experiences. Blender, an open-source 3D modeling and animation software, serves as a versatile content creation tool. It enables artists and developers to design 3D models, animations, and assets that can be seamlessly integrated into AR/VR projects. With its robust features and an active community, Blender supports the creation of visually stunning and detailed virtual environments.
          </p>
          <p style={{marginBottom:'15px'}}>
            On the other hand, Unreal Engine, developed by Epic Games, is a cutting-edge game engine widely adopted for AR/VR development. Unreal Engine provides a user-friendly interface and a powerful set of tools for designing and deploying immersive experiences. Its real-time rendering capabilities and advanced features make it ideal for creating high-quality AR/VR content. Unreal Engine also supports VR headsets and AR platforms, allowing developers to build applications that can run on a variety of devices.
          </p>
          <p style={{marginBottom:'15px'}}>
          Together, Blender and Unreal Engine enable a streamlined workflow for AR/VR development. Artists and developers can create 3D assets in Blender and seamlessly import them into Unreal Engine for scene creation, interactivity, and deployment. The combination of these tools empowers creators to bring their visions to life in the AR/VR space, providing a rich and engaging experience for users.
          </p>
          </>
          

          }
          
        </div>
        <div className='event-agenda'>
          <h1 className='event-title'>Agenda</h1>
          <div className='agenda-info' >
            <h1 data-aos="fade-right">Day 1</h1>
            {eventDetails.name === 'Figma Workshop' ?
              <ul className='agenda-list'>
                <li data-aos="fade-left"><span>Figma basic </span> creating shapes and exploring it's properties</li>
                <li data-aos="fade-right" ><span>how figma works? </span> structural fidelity of figma </li>
                <li data-aos="fade-left" ><span>Tools and effects </span> the figma basic tools</li>
                <li data-aos="fade-right"><span>Designing a website </span> designing the UI part of a proper website along with the UX</li>
                <li data-aos="fade-left" ><span>Work on a design page </span> make them work on a single UI design</li>
              </ul>
              :
              eventDetails.name === 'Fullstack Development Workshop' ?
                <ul className='agenda-list'>
                  <li data-aos="fade-left">Basics of React</li>
                  <li data-aos="fade-right">How React works</li>
                  <li data-aos="fade-left">Scope of React</li>
                  <li data-aos="fade-right">How to start building a website</li>
                  <li data-aos="fade-left">Start building a dashboard</li>
                  <li data-aos="fade-right">Designing a web page</li>
                </ul>
                :
                <ul className='agenda-list'>
                  <li data-aos="fade-left">Experiencing Blender</li>
                  <li data-aos="fade-right"><span>part 1 </span> shapes and geometry in blender with render</li>
                  <li data-aos="fade-left"><span>part 2 </span> modifiers and particles with render</li>
                  <li data-aos="fade-right"><span>part 3 </span> animation and rigging</li>
                </ul>
            }
          </div>
          <div className='agenda-info'>
            <h1 data-aos="fade-right">Day 2</h1>{eventDetails.name === 'Figma Workshop' ?
              <ul className='agenda-list'>
                <li data-aos="fade-left"><span>Animation</span> the animations that can be incorporated into the elements of the design </li>
                <li data-aos="fade-right"><span>Prototyping</span> the wireframing connections of the website and how it works</li>
                <li data-aos="fade-left"><span>Designing a working website</span> making them create a proper website with all the prototyping and animations</li>
                <li data-aos="fade-right"><span>what else can be done ?</span> what else can figma be used as a designing platform and where and how useful it is</li>
              </ul>
              :
              eventDetails.name === 'Fullstack Development Workshop' ?
                <ul className='agenda-list'>
                  <li data-aos="fade-left">WHat is API ?</li>
                  <li data-aos="fade-right">How to make an API call?</li>
                  <li data-aos="fade-left">Type of network requests</li>
                  <li data-aos="fade-right">Integrating front end and back end</li>
                  <li data-aos="fade-left">What next?</li>
                  <li data-aos="fade-right">How to continue the learning arc?</li>
                </ul>
                :
                <ul className='agenda-list'>
                  <li data-aos="fade-left">Experiencing UE5</li>
                  <li data-aos="fade-right">Blender to UE5 migration</li>
                  <li data-aos="fade-left">Unreal Templates</li>
                  <li data-aos="fade-right">Unreal productiob and deployment</li>
                  <li data-aos="fade-left">Unreal Hardware</li>
                </ul>
            }
          </div>
        </div>
      </div>
      <button className='register-btn'>Register Now</button>
    </div>
  )
}

export default Event