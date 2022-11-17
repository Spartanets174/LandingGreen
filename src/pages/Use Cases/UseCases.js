import './UseCases.scss'
import Btn from '../../components/btn/btn';
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
import Shop from '../../components/img/Shop.png'
import Car from '../../components/img/Car.png'
import Airplane from '../../components/img/Airplane.png'
import BigCar from '../../components/img/BigCar.png'
import Xz from '../../components/img/Xz.png'
import Bank from '../../components/img/Bank.png'
import Laptop from '../../components/img/Laptop.png'
import Factory from '../../components/img/Factory.png'
const UseCases = () => {
    return(
        <div className='ContainerUse' id='Use Cases'>
            <div className='UseMain'>
                <div className='UseTop'>
                    <P cls={"text text__green text__middle"} text="Use Cases"/>
                    <H2 cls={"h2 h2__dark h2__middle"} text="Used in Every Environment, to Save the Environment"/>
                    <P cls={"text text__dark middle"} text="There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting."/> 
                </div>
                <div className='UseMiddle'>
                    <div className='UseCard'>
                        <img src={Shop} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Ecommerce"/>
                            <P cls={"text text__gray text__small"} text="See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations."/>      
                            <a className='MiddleA' href="">Learn more</a>                      
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Car} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Rideshare"/>
                            <P cls={"text text__gray text__small"} text="Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly."/>    
                            <a className='MiddleA' href="">Learn more</a>                           
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Airplane} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Flights"/>
                            <P cls={"text text__gray text__small"} text="Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated."/>    
                            <a className='MiddleA' href="">Learn more</a>                           
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Laptop} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Enterprise Resource Planning"/>
                            <P cls={"text text__gray text__small"} text="Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects."/> 
                            <a className='MiddleA' href="">Learn more</a>                              
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={BigCar} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Energy"/>
                            <P cls={"text text__gray text__small"} text="Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world."/>  
                            <a className='MiddleA' href="">Learn more</a>                             
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Xz} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Supply Chain"/>
                            <P cls={"text text__gray text__small"} text="Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too."/>  
                            <a className='MiddleA' href="">Learn more</a>                             
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Bank} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Fintech"/>
                            <P as="a" cls={"text text__gray text__small"} text="Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects."/> 
                            <a className='MiddleA' href="">Learn more</a>                              
                        </div>
                    </div>
                    <div className='UseCard'>
                        <img src={Factory} alt="" />
                        <div>
                            <H2 cls={"h2 h2__dark h2__verysmall"} text="Fleet"/>
                            <P as="a" cls={"text text__gray text__small"} text="TYou track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact."/>   
                            <a className='MiddleA' href="">Learn more</a>                            
                        </div>
                    </div>
                </div>
                <div className='UseBottom'>
                    <H2 cls={"h2 h2__dark h2__small"} text="Don't See Your Industry?"/>
                    <P cls={"text text__dark text__middle"} text="Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions."/>
                    <Btn cls={"button button__dark button__middle"} text="Contact Us"/> 
                </div>
            </div>          
        </div>
    )
}

export default UseCases;