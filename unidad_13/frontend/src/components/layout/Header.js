import NavButton from './NavButton.js';
import Title from './Title.js';
import family from '../../images/characters/simpson-family.png'
import kodos from '../../images/characters/kodos.png'
import logo from '../../images/misc/the-simpsons-logo.svg'
import nelson from '../../images/characters/nelson-muntz.png'
import tv from '../../images/misc/tv.png'

const Header = (props) => {
    return (
        <div className='nav-bar'>
            <Title image={family} className={'title green'} />
            <Title image={logo} className={'title blue'} />
            <NavButton image={nelson} text='Characters' className='btn-characters hbg-yellow t-white' />
            <NavButton image={tv} text='Episodes' className='hbg-orange t-white' />
            <NavButton image={kodos} text='Contact Us' className='hbg-red t-white' />
        </div>);
};

export default Header;