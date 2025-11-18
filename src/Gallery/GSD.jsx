import { SD } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'sd', title: 'Singha Dwar', imgSrc: SD },
];

const GSD = () => <Photos title="singha-dwar" photosData={photosData}/>;

export default GSD;
