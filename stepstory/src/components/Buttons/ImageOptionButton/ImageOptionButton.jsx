import optionButton from '../../../assets/images/buttons/optionbutton.png'
import './style.css';

export default function ImageOptionButton() {
    return (
    <button className="option-button">
        <img src={optionButton} alt="옵션 버튼" width={'30px'} />
    </button>
    );
  }