'use client';

import Link from 'next/link';
import { ArrowUpRight, MessageCircle, ArrowRight, ClipboardList } from 'lucide-react';
import { site } from '@/lib/site';
import styles from './RoyalHomeSections.module.css';

export default function CTASection() {
  return (
    <section className={styles.enquirySection} aria-labelledby="royal-enquiry-title">
      <div className={styles.enquiryPanel}>
        <div className={styles.enquiryCopy}>
          <p className={styles.eyebrow}><span /> LET'S GET YOUR MATERIALS READY</p>
          <h2 id="royal-enquiry-title">Ready to start your<br /><span>next project?</span></h2>
          <p>Bring us your list. We'll help you source the right electrical, hardware, and industrial supplies.</p>
          <div className={styles.enquirySteps} aria-label="How to enquire">
            <span><b>01</b> Share your list</span><ArrowRight size={15} aria-hidden="true" />
            <span><b>02</b> Get a quote</span><ArrowRight size={15} aria-hidden="true" />
            <span><b>03</b> Arrange supply</span>
          </div>
        </div>
        <div className={styles.enquiryTicket}>
          <div className={styles.ticketHeading}><ClipboardList size={24} strokeWidth={1.5} /><span>YOUR NEXT ORDER<br />STARTS HERE.</span></div>
          <Link href="/contact" className={styles.quoteButton}>Request a quote <ArrowUpRight size={20} /></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}><MessageCircle size={19} /> Chat on WhatsApp</a>
          <a href={site.phoneHref} className={styles.ticketPhone}>{site.phone}</a>
          <p>Royal Electricals &amp; Hardware<br /><span>Here for your next requirement.</span></p>
        </div>
      </div>
    </section>
  );
}
