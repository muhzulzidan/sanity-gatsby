import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { Link } from "gatsby";

import ads from "../images/ads.png";

import Facebook from "../icons/facebook.svg";
import Twitter from "../icons/twiter.svg";
import Google from "../icons/google.svg";
import Search from "../icons/search.svg";

import * as styles from "./header.module.css";

const Header = ({
  onHideNav,
  onShowNav,
  showNav
  // siteTitle
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.branding}>
            {/* <Link to="/">{siteTitle}</Link> */}
            90 x 77
          </div>
          <img src={ads} alt="ads" className={styles.ads2} />
          <div className={styles.icons}>
            <Search className={styles.searchIcon} />
            <Facebook className={styles.facebook} />
            <Twitter />
            <Google />
          </div>
        </div>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            {/* <li>
                      <Link to="/archive/">Archive</Link>
                    </li> */}

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/fixtures">Fixtures</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
