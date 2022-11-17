import './CloverlyBlog.scss'
import Btn from '../../components/btn/btn';
import P from '../../components/p/p';
import H2 from '../../components/h2/h2';
const CloverlyBlog = () => {
    return(
        <div className='ContainerBlog'>
            <div className='BlogMain'>
                <div className='BlogTop'>
                    <P cls={"text text__green text__middle"} text="Cloverly Blog"/>
                    <H2 cls={"h2 h2__dark h2__middle"} text="The Latest in the World of Sustainability"/>
                    <Btn cls={"button button__border button__small"} text="Read More"/> 
                </div>
            </div>          
        </div>
    )
}

export default CloverlyBlog;