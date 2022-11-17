import './PartnerSpotlight.scss'
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
import Conference from '../../components/img/Conference.png';
import Corps from '../../components/img/Corps.png'

const PartnerSpotlight = () => {
    return(
        <div className='PartnerContainer'>
            <div className='leftPicture'>
                <img className='img' src={Conference}  alt="" />
            </div>
            <div className='rightText'>
                <div className='rightTop'> 
                    <P cls={"text text__green text__middle"} text="Partner Spotlight"/>
                    <P cls={"text text__dark text__big"} text="Partner Spotlight
At the JOIN data conference, the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly."/>
                </div>
                <div className='rightMiddle'>
                    <H2 cls={"h2 h2__green h2__big"} text='“ ”'/>
                    <P cls={"text text__dark text__huge"} text="We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API."/>
                    <P cls={"text text__dark text__small"} text="Read Full Story"/>
                </div>
                <div className='rightBottom'>
                    <div>
                        <img className='img' src={Corps} alt="" />
                    </div>
                    <div className='smallText'>
                        <P cls={"text text__gray text__small"} text="Daniel Mintz"/>
                        <P cls={"text text__gray text__small"} text="Chief Data Evangelist at Looker"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSpotlight;