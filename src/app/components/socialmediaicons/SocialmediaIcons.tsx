import FacebookIcon from '../../assets/images/socialmediaicons/facebook-2.svg';
import InstagramIcon from '../../assets/images/socialmediaicons/instagram-2.svg';
import styles from './SocialmediaIcons.module.css';

const SocialMediaIcons = () => {
  return (
    <div className={styles.socialMediaIcons}>
      <a href="https://www.facebook.com/profile.php?id=61566118247523" target="_blank" rel="noopener noreferrer">
        <FacebookIcon width={32} height={32} />
      </a>
      <a href="https://www.instagram.com/dealbooster_sweden/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon width={45} height={45} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;