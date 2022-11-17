import './TryCloverly.scss'
import H2 from '../../components/h2/h2';
import P from '../../components/p/p';
import Btn from '../../components/btn/btn';

const TryCloverly = () =>{
    return(
        <div className='activitiesContainer' id='Pricing'>
            <div className='activitiesMain'>
                <H2 cls={"h2 h2__white h2__middle"} text="What Activities Will You Offset?"/>
                <P cls={"text text__white middle"} text="Neutralize your carbon footprint with the Cloverly API."/> 
                <Btn cls={"button button__green button__middle"} text="Try Cloverly"/>
            </div>
        </div>
    )
}
export default TryCloverly;