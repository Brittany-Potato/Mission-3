import React from 'react'
import styles from './footer'

export default function Footer() {
    return (
      <footer className={styles.mainContainer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitles}>CARS</h3>
          <a href="https://www.turners.co.nz/Cars/how-to-buy/" className={styles.aTag}>How to Buy</a>
          <a href="https://www.turners.co.nz/Cars/sell-your-car/" className={styles.aTag}>Sell Your Car</a>
          <a href="https://www.turners.co.nz/Cars/finance-insurance/" className={styles.aTag}>Finance & Insurance</a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitles}>FINANCE AND INSURANCE</h3>
          <a href="#" className={styles.aTag}>Get a Quote</a>
          <a href="#" className={styles.aTag}>Insurance Info</a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitles}>SEARCH FOR</h3>
          <a href="#" className={styles.aTag}>Cars</a>
          <a href="#" className={styles.aTag}>Trucks</a>
          <a href="#" className={styles.aTag}>Motorbikes</a>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitles}>ABOUT US</h3>
          <a href="#" className={styles.aTag}>Our Story</a>
          <a href="#" className={styles.aTag}>Careers</a>
          <a href="#" className={styles.aTag}>Contact</a>
        </div>
      </footer>
    );
  }
  