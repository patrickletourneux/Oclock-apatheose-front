import useKonamiCode from '../KonamiCode/useKonamiCode';
import ContainerWhat from './ContainerWhat';
import ContainerWho from './ContainerWho';
import HeroContainer from './HeroContainer';
import oclock from '../../assets/images/oclock.jpg';
import church from '../../assets/images/church.jpg';

function HomePage() {
  // const konami = useKonamiCode();
  // const tasse = konami ? oclock : church;
  return (
    <><HeroContainer /><ContainerWhat /><ContainerWho /></>
    // <><img src={tasse} alt="tasse" /><>
    // </></>
  );
}

export default HomePage;
