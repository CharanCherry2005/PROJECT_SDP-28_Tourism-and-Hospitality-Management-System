import { useNavigate } from 'react-router-dom'
import './about.css'
export const AboutPage=()=>{
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate('/')
    }
    return(
        <div>
            <div className='about-main'>
                <div className='about-mini-main'>
                <div style={{backgroundImage:`url(${require("./ch_logo.jpg")})`, height:"52px", width:"52px", backgroundSize:"cover", marginTop:"16px", marginLeft:"12px", position:"relative", left:"-720px"}} className="home-button" onClick={()=>{navigate('/')}}></div>
                    <h1 className='payment-head'>TOURIST AND HOSPITALITY MANAGEMENT</h1>
                    <div className='about-groupLogo'></div>
                    <h1>MEET OUR TEAM</h1>
                    <h1>In our tourism and hospitality management system, diversity is our strength. 
                        From various corners of the world, we bring unique perspectives, united by 
                        our love for travel and hospitality. Together, we foster unity through 
                        spirited debates, innovative solutions, and shared laughter. 
                        Our collective vision drives us to redefine tourism management with 
                        inclusivity and collaboration. Join us in creating unforgettable experiences and 
                        forging lasting connections, one traveler at a time.</h1>
                    <div className='about-display'>
                        <div className='about-details'>
                            <div className='about-pic1'></div>
                            <h1>2200031736</h1>
                            <h1>KL Student</h1>
                           <a href='https://github.com/CharanCherry2005' className='glow'>GitHub</a>
                        </div>
                        <div className='about-details'>
                            <div className='about-pic2'></div>
                            <h1>2200031632</h1>
                            <h1>KL Student</h1>
                            <a href='https://github.com/CharanCherry2005' className='glow'>GitHub</a>
                        </div>
                        <div className='about-details'>
                            <div className='about-pic3'></div>
                            <h1>2200032038</h1>
                            <h1>KL Student</h1>
                            <a href='https://github.com/CharanCherry2005' className='glow'>GitHub</a>
                        </div>
                    </div>
                    <div className='about-all-container'>
                        <div className='about-all'></div>
                        <p className='about-all-text'>Group Pic</p>
                    </div>

                    <h1 className='payment-head'>Thank you</h1>
                    <div>
                        <button onClick={handleBack} className='glow'>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;