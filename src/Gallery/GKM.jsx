import { KMF, KMS } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'kmf', title: 'Kali Mandir Front', imgSrc: KMF },
  { id: 'kms', title: 'Kali Mandir Side', imgSrc: KMS },
];

const GKM = () => <Photos title="kali-mandir" photosData={photosData}/>;

export default GKM;
