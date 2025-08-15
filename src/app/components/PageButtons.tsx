'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './PageButtons.module.css';
import { oswald } from '../layout';
import Modal from './kalkylatormodal/Modal';
import Kalkylator from './kalkylator/Kalkylator';

export default function PageButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.pageButtonsContainer}>
        <button 
          onClick={toggleModal} 
          className={`${styles.pageButton} ${oswald.className}`}
        >
          Kalkylator
        </button>
        <Link href="/kontaktaoss" className={`${styles.pageButton} ${oswald.className}`}>
          Kontakta Oss
        </Link>
      </div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Kalkylator />
        </Modal>
      )}
    </>
  );
}
