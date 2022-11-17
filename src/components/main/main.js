import './main.scss'
import Sustainability from '../../pages/Sustainability/sustainability';
import ClovlerlyApi from '../../pages/CloverlyAPI/CloverlyApi';
import HowItWorks from '../../pages/How It Works/HowItWorks';
import UseCases from '../../pages/Use Cases/UseCases';
import ForDevelopers from '../../pages/For Developers/ForDevelopers';
import PartnerSpotlight from '../../pages/Partner Spotlight/PartnerSpotlight';
import TryCloverly from '../../pages/Try Cloverly/TryCloverly';
import CloverlyBlog from '../../pages/Cloverly Blog/CloverlyBlog';
const Main = () => {
    return(
        <main>
            <Sustainability/>
            <ClovlerlyApi/>
            <HowItWorks/>
            <UseCases/>
            <ForDevelopers/>
            <PartnerSpotlight/>
            <TryCloverly/>
            <CloverlyBlog/>
        </main>
    )
}

export default Main;