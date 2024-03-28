import optionButton from '../../../assets/images/buttons/backpagebutton.png'
import './style.css';

export default function BackPageButton() {
    return (
    <button className="back-page-button">
        <img src={optionButton} alt="뒤로가기 버튼" width={'40px'} />
    </button>
    );
  }