import { Box, Button, Container, Grid, TextField, Typography,container } from '@mui/material'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import logo from '../../assets/images/gtm-2.png'
import logoo from '../../assets/images/gtm3.png'
import logooo from '../../assets/images/gtm4.png'
import logoooo from '../../assets/images/gtm5.png'
import logo5 from '../../assets/images/gtm6.png'
import logo6 from '../../assets/images/gtm7.png'
import logo7 from '../../assets/images/gtm8.png'
import logo8 from '../../assets/images/gtm9.png'
// import logo9 from '../../assets/images/gtm10.png'
// import logo10 from '../../assets/images/gtm11.png'
// import logo11 from '../../assets/images/gtm12.png'
// import logo12 from '../../assets/images/gtm13.png'
// import logo13 from '../../assets/images/gtm14.png'
// import logo14 from '../../assets/images/e.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';






let card = [
    {
        id: 1,
        image: logoo,
        title: "Artificial Intelligence",
        content: "We build B2B and B2C market palce to help business scale ,intigrate 400+ and-ons to make the most of adobe commerce.",
        content2: "We build B2B and B2C market palce to help business scale ,intigrate 400+ and-ons to make the most of adobe commerce."
    },
    {
        id: 2,
        image: logooo,
        title: "BlockChain",
        content: "Our experties in blockchain technologies include solution such as smart business contracts and real Estate contract mangement systems and much more.",
        content2: "With reputation for delevering organic access,we develop strategix SEO compaigns that place our clients' websites in the covered top-three SERP positions."
    },
    {
        id: 3,
        image: logoooo,
        title: "Programming And Tech",
        content: "Digital is here to stay and grow exponentially increased visibility,marketing oppertunity at efficient budgets and customer engagement ",
        content2: "We help business people in to the digital service economy with our inovative solutions and advisory services."
    }
]
const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ["TECH IT GROW MORE", "LIVING INOVATION", "GROW WITH NFT'S"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });
    const [hov, setHov] = useState(null)
    return (
        <Box className='lay'>

            <div className='homediv'>
            <Box className='containerr'>
                <div className='homecolumn1'>
                <div className='c-lite-1'>
                    <h6 style={{ fontSize: "45px" }}>{typeEffect} <Cursor /></h6>
                    <Typography style={{ marginTop: "26px" }}>Bring both tangible and Intangible business metrics to the table to beat the odds.</Typography>
                    <Button variant="contained">CONTACT US<ChevronRightIcon /><ChevronRightIcon /></Button>
                </div>
                </div>
               
                <div className='homecolumn2'>
                    <img style={{ height: "384px",width:"100%", marginTop: "18px" }} src="https://glowtechmor.com/wp-content/uploads/2022/12/dribbble-animation-1.gif" alt='logo' />
                </div>
            </Box>
            </div>

            <div>
                <Typography className='on'>On-Demand Services</Typography>
            </div>
            <div className='servicediv'>
            <div className='box' data-aos="zoom-in-up">
                {card.map((e) => (
                    <div key={e.id} onMouseEnter={() => setHov(e)} className={` box-content ${hov === e && 'active_hover'}`} >
                              
                        <div className='box-front'>
                            <img src={e.image} alt='logoo' />
                            <h3>{e.title}</h3>
                            <p>{e.content}</p>
                        </div>
                        <div className='box-back'>
                            <p>{e.content2}</p>
                        </div>
                    </div>
                ))}

            </div>
            </div>
           
           <div className='whowearediv'>
           <div className='container-2'>
                <div className='c-left' data-aos="fade-right">
                    <h3>Who we are</h3>
                    <h2>Holistic & Innovative Solutions For Your Business Needs​</h2>
                    <p>We offer integrated consulting and technology implementation services to businesses that want to redefine their customer success stories through digital transformation.</p>

                    <p>We have always been in the race to identify innovation before it reaches us from elsewhere. Our engagement with blockchain technology started years ago and today we have successfully helped our customers to implement mass scale blockchain-powered business ecosystems for their end consumers.</p>

                    <p>Our expertise in blockchain technologies include solutions such as Smart Business Contracts, Automated Lottery Systems, Customer Loyalty & Rewards System, Real Estate Contract Management Systems, and much more.</p>
                    <Button className='btn' variant="contained">Get Free Quote<ChevronRightIcon /></Button>
                </div>
                <div className='c-right' data-aos="fade-left">
                    <img className='c-right-img' src={logo5} alt='logo5' />
                </div>
            </div>
           </div>
            

            <div className='container-3'>
                <h5>HOW WE WORK!</h5>
                <h2>OUR WORKING PROCESS</h2>
            </div>
            <div className='img-section'>
                <img style={{ width: "90%", height:"50vh" }} src={logo6} alt='logo6' />
            </div>

            <div className='container-4'>
                <div className='c-top' data-aos="zoom-in">
                    <h6>DATA DRIVEN</h6>
                    <h2 style={{ fontWeight: "600" }}>OUR CORE VALUES</h2>
                </div>
                {/* mapping karna he card container ko */}
                
                <div className='card-container'>

                    <div className='leftcardcontainer'>
                     <div className='left-card' >

                        <div className='left-card-1'>
                            <img style={{ width: "100px" }} src={logo7} alt='logo7' />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "8px" }}>Business Goal</h5>
                            <Typography>Dynamic content brand voice council tweens sticky content responsive ROI.</Typography>
                        </div>
                    </div>

                    <div className='left-card' >
                        <div className='left-card-1'>
                            <img style={{ width: "100px" }} src={logo7} alt='logo7' />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "8px" }}>Business Goal</h5>
                            <Typography>Dynamic content brand voice council tweens sticky content responsive ROI.</Typography>
                        </div>
                    </div>
                    
                    </div>

                   <div className='leftcardcontainer'>

                   <div className='right-card'>
                        <div>
                            <img style={{ width: "100px" }} src={logo8} alt='logo8' />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "8px" }}>Landing Made Easy</h5>
                            <Typography>Dynamic content brand voice council tweens sticky content responsive ROI.</Typography>
                        </div>

                    </div>
                   </div>
                   
                </div>
            </div>
            <div className='banner-image'>
                <div className='b-i-s'>
                    <h3>LET'S TALK ABOUT WHAT WE<br />
                        CAN BUILD TOGETHER</h3>
                    <Button className='btn-1' variant="contained">Get Free Quote<ChevronRightIcon /></Button>
                </div>
            </div>
            {/* form section start */}
            <form className='form-d'>
                <h3>GET IN TOUCH WITH US</h3>
                <div className='flex-form'>
                    <div className='formm'>
                        <div className="form-row form-e" >
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="Fast Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group form-e">
                            <input type="email" className="form-control" id="inputAddress" placeholder="email" />
                        </div>
                        <div className="form-group form-e">
                            <input type="number" className="form-control" id="inputAddress2" placeholder="Mobile Number" />
                        </div>
                        <div className="form-group form-e">
                            <textarea className="form-control" id="inputAddress2" rows="4" cols="50" placeholder="message..." />
                        </div>
                        <button style={{ width: "100%" }} type="submit" className="btn btn-primary">SUBMIT FORM</button>
                    </div>
                    
                    <div className='boxes'>
                        <div className='fast-box'>

                            <Typography className='add'>< LocationOnIcon style={{ color: "#0b9eda" }} />Address</Typography>
                            <p style={{ color: "#ccc" }}>WeWork Prestige Cube Koramangala, Site No. 26, Laskar Hosur Road, Adugodi, Bangalore, KA 560029</p>
                        </div>
                        <div className='second-box'>
                            <Typography className='add'><EmailIcon style={{ color: "yellowgreen" }} />Email</Typography>
                            <p style={{ color: "#ccc" }}>info@glowtechmor.com</p>
                        </div>
                        <div className='second-box'>
                            <Typography className='add'><PhoneIcon style={{ color: "red" }} />Phone</Typography>
                            <p style={{ color: "#ccc" }}>+91 9064370711</p>
                        </div>
                    </div>
                </div>
            </form>
            {/* form section end */}
        </Box>
    )
}

export default Home
