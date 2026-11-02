'use client';

import { BadgeCheck, Boxes, Network, Truck, Wallet, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import styles from './RoyalHomeSections.module.css';

const reasons = [
  { icon: Wallet, title: 'Value that adds up.', text: 'Competitive pricing on the electrical and hardware products your project needs.' },
  { icon: Network, title: 'Well connected. Well supplied.', text: 'Established vendor relationships and a strong distribution network.' },
  { icon: Boxes, title: 'Room for your requirements.', text: 'Warehouse capacity and organised handling to support dependable supply.' },
  { icon: BadgeCheck, title: 'Quality comes first.', text: 'Careful product sourcing from trusted brands and established vendors.' },
  { icon: Truck, title: 'Right products. Right on time.', text: 'Responsive coordination and scheduled deliveries that keep your work moving.' },
];

export default function WhyChooseRoyal() {
  return (
    <section id="why-royal" className={styles.whySection}>
      <div className={styles.whyLayout}>
        <div className={styles.whyIntro}>
          <p className={styles.eyebrow}><span /> THE ROYAL DIFFERENCE</p>
          <h2>Why choose<br /><span>Royal?</span></h2>
          <p className={styles.whyCopy}>More than a product list. A supply partner who understands what your work needs.</p>
          <div className={styles.sinceSeal}>
            <span>ESTABLISHED</span><strong>2000</strong><span>BUILT ON TRUST</span>
          </div>
          <Link href="/about" className={styles.textLink}>Get to know Royal <ArrowUpRight size={17} /></Link>
        </div>
        <ol className={styles.reasonList}>
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className={styles.reasonRow}>
              <span className={styles.reasonNumber}>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <Icon className={styles.reasonIcon} strokeWidth={1.5} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
