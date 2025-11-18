import { SG } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'sg', title: 'Shan Ghar', imgSrc: SG },
];

const GSG = () => <Photos title="shan-ghar" photosData={photosData}/>;

export default GSG;
