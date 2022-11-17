import './ForDevelopers.scss';
import Btn from '../../components/btn/btn';
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
import DevsCode from '../../components/img/DevsCode.png';

const ForDevelopers = () =>{
    return(
        <div className='ContainerDevs' id='Developers'>
            <div className='DevsMain'>
                <div className='DevsLeft'>
                    <P cls={"text text__green text__middle"} text="For Developers, By Developers"/>
                    <H2 cls={"h2 h2__white h2__middle"} text="Simple Integration."/>
                    <H2 cls={"h2 h2__white h2__middle"} text="RESTful API."/>
                    <P cls={"text text__white text__big"} text="The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys."/>
                    <div className='DevsLeftButtons'>
                        <Btn cls={"button button__green button__middle"} text="Get API Keys"/>
                        <Btn cls={"button button__white button__middle"} text="Developer Docs"/>
                    </div>
                </div>
                <div className='DevsRight'>
                    <img className='img' src={DevsCode}  alt="" />
                </div>
            </div>
        </div>
    )
}
export default ForDevelopers;