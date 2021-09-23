import '../../styles/components/layout/PlaceButton.css';
import PlaceButton from './PlaceButton.js';
import ChurchPage from '../../pages/ChurchPage.js';
import HousePage from '../../pages/HousePage.js';
import MapPage from '../../pages/MapPage.js';
import MartPage from '../../pages/MartPage.js';
import PlantPage from '../../pages/PlantPage.js';
import SchoolPage from '../../pages/SchoolPage.js';

const Places = () => {
    return (
        <div className='places'>
            <PlaceButton image={require('../../images/places/springfield-map.jpg').default} title='Springfield' className='bg-yellow t-black' content={<MapPage />} />
            <PlaceButton image={require('../../images/places/simpsons-house.png').default} title='742 Evergreen Terrace' className='bg-pink t-white' content={<HousePage />} />
            <PlaceButton image={require('../../images/places/nuclear-power-plant.png').default} title='Nuclear Power Plant' className='bg-black t-white' content={<PlantPage />} />
            <PlaceButton image={require('../../images/places/springfield-elementary-school.png').default} title='Springfield Elementary School' className='bg-green t-white' content={<SchoolPage />} />
            <PlaceButton image={require('../../images/places/kwik-e-mart.png').default} title='Kwik-E-Mart' className='bg-blue t-white' content={<MartPage />} />
            <PlaceButton image={require('../../images/places/first-church-of-springfield.png').default} title='First Church of Springfield' className='bg-red t-white' content={<ChurchPage />} />
        </div>
    );
};

export default Places;