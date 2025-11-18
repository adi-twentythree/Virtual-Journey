import { BDA, BDF, BDS } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'bda', title: 'Baradwari Aerial', imgSrc: BDA },
  { id: 'bdf', title: 'Baradwari Front', imgSrc: BDF },
  { id: 'bds', title: 'Baradwari Side', imgSrc: BDS },
];

const GB = () => <Photos title="Baradwari" photosData={photosData}/>;

export default GB;
