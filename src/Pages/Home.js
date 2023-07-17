import styles from '../styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faUser,faHeart } from '@fortawesome/free-regular-svg-icons';

const Home = ({ posts }) => {
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
          <FontAwesomeIcon icon={faUser} />
            <div>
              <span className={styles.postAuthor}>{post.user.name}</span>
              <span className={styles.postTime}>a minute ago</span>
            </div>
          </div>
          <div className={styles.postContent}>{post.content}</div>

          <div className={styles.postActions}>
            <div className={styles.postLike}>
              <FontAwesomeIcon icon={faHeart} />
              <span>5</span>
            </div>

            <div className={styles.postCommentsIcon}>
            <FontAwesomeIcon icon={faComment} />
              <span>2</span>
            </div>
          </div>
          <div className={styles.postCommentBox}>
            <input placeholder="Start typing a comment" />
          </div>

          <div className={styles.postCommentsList}>
            <div className={styles.postCommentsItem}>
              <div className={styles.postCommentHeader}>
                <span className={styles.postCommentAuthor}>Bill</span>
                <span className={styles.postCommentTime}>a minute ago</span>
                <span className={styles.postCommentLikes}>22</span>
              </div>

              <div className={styles.postCommentContent}>Random comment</div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
export default Home;