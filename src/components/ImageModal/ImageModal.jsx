import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');
export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={onRequestClose}>
      <img className={css.image} src={image?.urls?.regular} alt={image?.alt_description} />
      <p>Author: {image?.user?.name}</p>
    </Modal>
  );
}