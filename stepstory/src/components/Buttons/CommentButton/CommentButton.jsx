import commentButton from '../../../assets/images/buttons/commentbutton.png'
import './style.css';

export default function CommentButton() {
    return (
    <button className="comment-button">
        <img src={commentButton} alt="댓글 버튼" width={'50px'} />
    </button>
    );
  }