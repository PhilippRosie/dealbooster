"use client";
import { useState } from 'react';
import Link from "next/link";
import styles from "./KontaktButton.module.css";
import Modal from '../kalkylatormodal/Modal';
import Kalkylator from '../kalkylator/Kalkylator';
import { oswald } from '../../layout';
export default function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.contactButtonContainer}>
      <Link href="/kontaktaoss" className={`${styles.contactButton} ${oswald.className}`}>
        Kontakta Oss
      </Link>
      <button onClick={toggleModal} className={`${styles.calculatorButton} ${oswald.className}`}>
        Kalkylator
      </button>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Kalkylator />
        </Modal>
      )}
    </div>
  );
}
