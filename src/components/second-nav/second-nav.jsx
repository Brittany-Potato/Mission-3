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
            <i className={`fas fa-chevron-down ${styles.symbol}`}></i>
            <ul className={styles.searchMenuItems}>
              <li className={styles.searchSubMenuOne}>
                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/"
                  className={styles.searchSubMenuList}
                >
                  Search for Cars
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/"
                  className={styles.searchSubMenuList}
                >
                  Search for Trucks
                </a>

                <a
                  href="www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/"
                  className={styles.searchSubMenuList}
                >
                  Search for Damaged Vehicles
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/information/how-to-pay/"
                  className={styles.searchSubMenuList}
                >
                  Search for General Goods
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/"
                  className={styles.searchSubMenuList}
                >
                  Search for Boats
                </a>

                <a
                  href="www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/"
                  className={styles.searchSubMenuList}
                >
                  Search for Caravans
                </a>

                <a
                  href="https://www.turners.co.nz/motorcycles-scooters/Used-Motorbikes-for-Sale/?sortorder=0&pagesize=20&pageno=1"
                  className={styles.searchSubMenuList}
                >
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
            <i className={`fas fa-chevron-down ${styles.symbolBuy}`}></i>
            <ul className={styles.buyMenuItems}>
              <li className={styles.buySubMenuOne}>
                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/"
                  className={styles.buySubMenuList}
                >
                  Ways to Buy
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/"
                  className={styles.buySubMenuList}
                >
                  Book a test Drive
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/information/how-to-pay/"
                  className={styles.buySubMenuList}
                >
                  How to Pay
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/"
                  className={styles.buySubMenuList}
                >
                  FAQs about Buying
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* --------------Sell your Car List----------------- */}
      <nav>
        <ul className={styles.sellMenu}>
          <li className={styles.sellSubMenu}>
            <h3>Sell your Car</h3>
            <i className={`fas fa-chevron-down ${styles.symbolSell}`}></i>
            <ul className={styles.sellMenuItems}>
              <li className={styles.sellSubMenuOne}>
                <a
                  href="https://www.turners.co.nz/Cars/cash-now/"
                  className={styles.sellSubMenuList}
                >
                  Interested in selling your car?
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/sell-your-car/selling-your-car-faqs/"
                  className={styles.sellSubMenuList}
                >
                  FAQs about selling
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* --------------Services and Information List----------------- */}
      <nav>
        <ul className={styles.servicesMenu}>
          <li className={styles.servicesSubMenu}>
            <h3>Services and Information</h3>
            <i className={`fas fa-chevron-down ${styles.symbolServices}`}></i>
            <ul className={styles.servicesMenuItems}>
              <li className={styles.servicesSubMenuOne}>
                <a
                  href="https://www.turners.co.nz/Cars/cash-now/"
                  className={styles.servicesSubMenuList}
                >
                  Interested in selling your car?
                </a>

                <a
                  href="https://www.turners.co.nz/Cars/sell-your-car/selling-your-car-faqs/"
                  className={styles.servicesSubMenuList}
                >
                  FAQs about selling
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* --------------Find a Car List----------------- */}
      <nav>
        <ul className={styles.findMenu}>
          <li className={styles.findSubMenu}>
            <h3>Find a Car</h3>
            <i className={`fas fa-chevron-down ${styles.symbolFind}`}></i>
            <ul className={styles.findMenuItems}>
              <li className={styles.findSubMenuOne}>
                <a
                  href="www.turners.co.nz/Cars/Used-Cars-for-Sale/"
                  className={styles.findSubMenuList}
                >
                  Find a Car
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
