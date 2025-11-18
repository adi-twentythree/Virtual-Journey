import { VMA, VMB, VMF } from '../assets/Images/Images';
import Photos from '../components/Photos';

const photosData = [
  { id: 'vma', title: 'Vishnu Mandir Aerial', imgSrc: VMA },
  { id: 'vmb', title: 'Vishnu Mandir Back', imgSrc: VMB },
  { id: 'vmf', title: 'Vishnu Mandir Front', imgSrc: VMF },
];

const GVM = () => <Photos title="vishnu-mandir" photosData={photosData}/>;

export default GVM;
