import optionButton from '../../../assets/images/buttons/nextpagebutton.png'
import './style.css';

export default function NextPageButton() {
    return (
    <button className="next-page-button">
        <img src={optionButton} alt="다음으로 가기 버튼" width={'40px'} />
    </button>
    );
  }