import React from "react";
import styles from "./second-nav.module.css";

export default function secondNav() {
  return (
    <div className={styles.mainContainer}>

        {/* --------------Search Menu List----------------- */}
      <nav>
        <ul className={styles.searchMenu}>
          <li className={styles.searchSubMenu}>
            <h3>Search</h3>
            <ul className={styles.searchMenuItems}>
              <li className={styles.searchSubMenuOne}>
                <a href="https://www.turners.co.nz/Cars/how-to-buy/" className={styles.searchSubMenuList}>
                  Search for Cars
                </a>

                <a href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/" className={styles.searchSubMenuList}>
                  Search for Trucks
                </a>

                <a href="www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/" className={styles.searchSubMenuList}>
                  Search for Damaged Vehicles
                </a>

                <a href="https://www.turners.co.nz/Cars/information/how-to-pay/" className={styles.searchSubMenuList}>
                  Search for General Goods
                </a>

                <a href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/" className={styles.searchSubMenuList}>
                  Search for Boats
                </a>

                <a href="www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/" className={styles.searchSubMenuList}>
                  Search for Caravans
                </a>

                <a href="https://www.turners.co.nz/motorcycles-scooters/Used-Motorbikes-for-Sale/?sortorder=0&pagesize=20&pageno=1" className={styles.searchSubMenuList}>
                  Search for Bikes
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
              {/* --------------How to Buy List----------------- */}
                    <nav>
        <ul className={styles.buyMenu}>
          <li className={styles.buySubMenu}>
            <h3>How to Buy</h3>
            <ul className={styles.buyMenuItems}>
              <li className={styles.buySubMenuOne}>
                <a href="https://www.turners.co.nz/Cars/how-to-buy/" className={styles.buySubMenuList}>
                  Ways to Buy
                </a>

                <a href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/" className={styles.buySubMenuList}>
                  Book a test Drive
                </a>

                <a href="https://www.turners.co.nz/Cars/information/how-to-pay/" className={styles.buySubMenuList}>
                  How to Pay
                </a>

                <a href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/" className={styles.buySubMenuList}>
                  FAQs about Buying
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

    </div>
  );
}
