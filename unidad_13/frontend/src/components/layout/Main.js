import PlaceButton from './PlaceButton.js';
import church from '../../images/places/first-church-of-springfield.png'
import house from '../../images/places/simpsons-house.png'
import map from '../../images/places/springfield-map.jpg'
import mart from '../../images/places/kwik-e-mart.png'
import plant from '../../images/places/nuclear-power-plant.png'
import school from '../../images/places/springfield-elementary-school.png'

const Main = (props) => {
    return (
        <div className='main'>
            <PlaceButton image={map} text='Springfield' className='bg-yellow t-black' />
            <PlaceButton image={house} text='742 Evergreen Terrace' className='bg-pink t-white' />
            <PlaceButton image={plant} text='Nuclear Power Plant' className='bg-black t-white' />
            <PlaceButton image={school} text='Springfield Elementary School' className='bg-green t-white' />
            <PlaceButton image={mart} text='Kwik-E-Mart' className='bg-blue t-white' />
            <PlaceButton image={church} text='First Church of Springfield' className='bg-red t-white' />
        </div>
    );
};

export default Main;