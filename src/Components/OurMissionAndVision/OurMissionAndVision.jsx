import './OurMissionAndVision.css'
import StrimingCard from '../../Components/StrimingCard/StrimingCard'
import Title from '../../Components/Title/Title'
import img4 from '../../assets/Icons/Icon (1).png';
import { motion } from 'framer-motion'
import { fadeIn } from '../../Animation'
export default function OurMissionAndVision() {
  return (
    <section className={"home-padding  zk-mission "}>

    <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}>
        <Title
            maMargin={'maMargin'}
            size={'mo-size'}
            matext={'mo-text'}
            title={"Our Mission & Vision & Values."}
            text={""}
        />
        <div className='zk-div-card '>
            <StrimingCard className=""
                title={"Our Mission"}
                img={img4}
                desc={"Our mission is to empower individuals and organizations to achieve their full potential through in𝘚𝘏𝘈𝘏𝘈𝘋 𖢊tive solutions, exceptional service, and a commitment to excellence. We strive to create meaningful impact by addressing the needs of our clients. "} />

            <StrimingCard
                title={"Our Vision"}
                img={img4}
                desc={"Our vision is to be a leading force in our industry, recognized for our unparalleled dedication to quality and social responsibility. We aspire to shape a future where technology and creativity converge to transform challenges into opportunities.   "} />
            <StrimingCard

                title={"Our Values"}
                img={img4}
                desc={"Our values guide everything we do and shape our organizational culture. We believe in integrity, demonstrating honesty and transparency in all our interactions. We value collaboration, recognizing that teamwork leads to greater achievements.  "} />
        </div>
    </motion.div>
</section>


  )
}
