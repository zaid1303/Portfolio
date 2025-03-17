import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import profile from "../assets/img/profile.jpg"
import { motion } from "framer-motion"

export const About = () => {

  return (
    <section id="about">
      <div className="container">
        <div className="about pt-10">
          <div className="about-title">
            <h1>About me</h1>
          </div>
          <div className="flex flex-wrap">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="about-left w-full lg:w-1/2 lg:p-8"
            >
              <div className='flex items-center justify-center'>
                <img src={profile} ></img>
              </div>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="about-right w-full lg:w-1/2 mt-7">
              <div className="about-para">
                <p>I am a passionate Full Stack Web Developer with a knack for building dynamic and responsive web applications. I specialize in both front-end and back-end development, combining modern technologies to create seamless user experiences. </p>
                <p>I am also good in Problem Solving. I achieved Proficiency in problem solving by solving 900+ DSA Problems.</p>
              </div>
              <div className="about-skills mt-3">
                <div className="about-skill"><p>Backend Development</p><hr style={{ width: "95%" }} /></div>
                <div className="about-skill"><p>Frontend Development</p><hr style={{ width: "85%" }} /></div>
                <div className="about-skill"><p>Problem Solving</p><hr style={{ width: "90%" }} /></div>
                <div className="about-skill"><p>Communication</p><hr style={{ width: "85%" }} /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}