import wantToGoButton from '../../../assets/images/buttons/wanttogobutton.png'
import './style.css';

export default function WantToGoButton() {
    return (
    <button className="want-to-go-button">
        <img src={wantToGoButton} alt="가고싶다 버튼" width={'50px'} />
    </button>
    );
  }