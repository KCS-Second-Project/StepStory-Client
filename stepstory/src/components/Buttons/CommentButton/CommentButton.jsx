import commentButton from '../../../assets/images/buttons/commentbutton.png'
import './style.css';

export default function CommentButton({ onClick }) {
    return (
    <button className="comment-button" onClick={ onClick }>
        <img src={commentButton} alt="댓글 버튼" width={'50px'} />
    </button>
    );
  }