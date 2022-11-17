import './CloverlyApi.scss'
import Btn from '../../components/btn/btn';
import P from '../../components/p/p';
import World from '../../components/img/world.png';
import H2 from '../../components/h2/h2';
const CloverlyApi = () => {
    return(
        <div className='ContainerApi'>
            <div className='ApiMain'>
                <div className='ApiInf'>
                     <P cls={"text text__green text__middle"} text="Clovery API"/>
                     <H2 cls={"h2 h2__dark h2__middle"} text="Offset Your Carbon Footprint in Real Time"/>
                     <P cls={"text text__dark text__middle"} text="Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions"/>
                     <div className='ApiBtns'>
                         <Btn cls={"button button__green button__middle"} text="Get Started for Free"/>
                         <Btn cls={"button button__dark button__middle"} text="Let's Talk"/>
                     </div>
                </div>
                <img src={World} alt="" />
            </div>
        </div>
    )
}

export default CloverlyApi;