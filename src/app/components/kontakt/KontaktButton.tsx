'use client';

import Link from 'next/link';
import styles from './KontaktButton.module.css';

export default function KontaktButton() {
  return (
    <Link href="/kontaktaoss" className={styles.contactButton}>
      Kontakta oss
    </Link>
  );
}
