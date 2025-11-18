import { RTF, RTS } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'rtf', title: 'Ranachandi Temple Front', imgSrc: RTF },
  { id: 'rts', title: 'Ranachandi Temple Side', imgSrc: RTS },
];

const GRT = () => <Photos title="ranachandi-temple" photosData={photosData}/>;

export default GRT;
