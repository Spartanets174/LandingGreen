import './sustainability.scss';
import Btn from '../../components/btn/btn';
import Looker from '../../components/img/looker.png';
import Sus from '../../components/img/sus.png';
import Tc from '../../components/img/tc.png';
import Shopify from '../../components/img/shopify.png';
import Bigc from '../../components/img/bigc.png';
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
const Sustainability = () => {
    return(
        <div className='Container' id='/'>
            <div className='sustainabilityMain'>
                <div className='MainTop'>
                    <P cls={"text text__white text__small"} text="Sustainability on Demand"/>
                </div>
                <div className='MainMiddle'>
                    <H2 cls={"h2 h2__white h2__big"} text="Helping the World Go Carbon Neutral"/>
                    <P cls={"text text__white text__middle"} text="Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more."/>
                </div>
                <div className='MainBottom'>
                    <Btn cls={"button button__white button__middle"} text="Get Started"/>
                    <Btn cls={"button button__dark button__middle"} text="Let's Talk"/>
                </div>
            </div>
            <div className='sustainabilityImgs'>
                <div className='img1'></div>
                <div className='img2'></div>
                <div className='img3'></div>
                <div className='img4'></div>
            </div>
            <div className='sustainabilityCorps'>
                <img src={Looker} alt="" />
                <img src={Sus} alt="" />
                <img src={Tc} alt="" />
                <img src={Shopify} alt="" />
                <img src={Bigc} alt="" />
            </div>
        </div>
    )
}

export default Sustainability;