import shareButton from '../../../assets/images/buttons/sharebutton.png'
import './style.css';

export default function ShareButton() {
    return (
    <button className="share-button">
        <img src={shareButton} alt="공유 버튼" width={'50px'} />
    </button>
    );
  }