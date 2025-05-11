import Modal from 'react-modal';

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image?.urls?.regular} alt={image?.alt_description} />
      <p>Author: {image?.user?.name}</p>
    </Modal>
  );
}