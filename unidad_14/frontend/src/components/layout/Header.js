import '../../styles/components/layout/NavButton.css';
import '../../styles/components/layout/Title.css';
import NavButton from './NavButton.js';
import Title from './Title.js';
import CharactersPage from '../../pages/CharactersPage.js';
import ContactPage from '../../pages/ContactPage.js';
import EpisodesPage from '../../pages/EpisodesPage.js';

const Header = () => {
    return (
        <div className='nav-bar'>
            <Title image={require('../../images/characters/simpson-family.png').default} className={'title green'} />
            <Title image={require('../../images/misc/the-simpsons-logo.svg').default} className={'title blue'} />
            <NavButton image={require('../../images/characters/nelson-muntz.png').default} title='Characters' className='btn-characters hbg-yellow t-white' content={<CharactersPage />} />
            <NavButton image={require('../../images/misc/tv.png').default} title='Episodes' className='hbg-orange t-white' content={<EpisodesPage />} />
            <NavButton image={require('../../images/characters/kodos.png').default} title='Contact Us' className='hbg-red t-white' content={<ContactPage />} />
        </div>
        );
};

export default Header;