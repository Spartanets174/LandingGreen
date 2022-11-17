import './HowItWorks.scss'
import Btn from '../../components/btn/btn';
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
import SunPanel from '../../components/img/SunPanel.png'
import TheLoop from '../../components/img/TheLoop.png'
import Something from '../../components/img/Something.png'
const HowItWorks = () => {
    return(
        <div className='ContainerWorks' id='Product'>
            <div className='WorksMain'>
                <div className='MainLeft'>
                    <P cls={"text text__green text__middle"} text="How It Works"/>
                    <H2 cls={"h2 h2__dark h2__middle"} text="Connecting the Carbon Offset Infrastructure for a More Sustainable World"/>
                    <P cls={"text text__dark text__big"} text="Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster."/>
                    <Btn cls={"button button__border button__small"} text="Learn More"/> 
                </div>
                <div className='MainRight'>
                    <div className='RightTop'>
                        <img className='img' src={TheLoop}  alt="" />
                        <P cls={"text text__dark text__big"} text="Matching the Offset"/>
                        <P cls={"text text__gray text__small"} text="The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local."/>                                                
                    </div>
                    <div className='RightMiddle'>
                        <img className='img' src={Something} alt="" />
                        <P cls={"text text__dark text__big"} text="Transaction Transparency"/>
                        <P cls={"text text__gray text__small"} text="We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset."/>                            
                    </div>
                    <div className='RightBottom'>
                        <img className='img' src={SunPanel} alt="" />
                        <P cls={"text text__dark text__big"} text="Verified Sources"/>
                        <P cls={"text text__gray text__small"} text="To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects."/>                           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;