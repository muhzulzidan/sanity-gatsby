import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import * as styles from "./footer.module.css";
import Call from "../icons/call.svg";
import Mail from "../icons/mail.svg";
import Map from "../icons/map.svg";

const Footer = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={styles.root}>
          <div className={styles.top}>
            <div className={styles.about}>
              <h4>About FC</h4>
              <hr />
              <p>Lorem ipsum dolor sit amet consete adipis icing elit. Proin nibh augue.</p>
              <div>
                <p>
                  {" "}
                  <Map /> 10 Milk Street #230 Boston, MA 02108
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <Call /> +1 (123) 456-7890
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <Mail /> example@example.com
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <h4>Information</h4>
              <hr />
              <ul>
                <li>About the Club</li>
                <li>Shop</li>
                <li>Our Team</li>
                <li>Tickets and Membership</li>
                <li>Features</li>
                <li>404 Error Page</li>
              </ul>
            </div>
            <div className={styles.support}>
              <h4>Support</h4>
              <hr />
              <ul>
                <li>Terms and Conditions</li>
                <li>Website Accessibility Statement</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
                <li>FAQ</li>
                <li>Account</li>
              </ul>
            </div>
            <div className={styles.gallery}>
              <h4>Gallery</h4>
              <hr />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className={styles.sponsors}>
            <h4>sponsors</h4>
            <div className={styles.div}>
              <div>140 x 50</div>
              <div>140 x 50</div>
              <div>140 x 50</div>
              <div>140 x 50</div>
              <div>140 x 50</div>
              <div>140 x 50</div>
              <div>140 x 50</div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© Copyright 2014 FC Theme. All Rights Reserved</p>
          </div>
        </div>
      )}
    />
  );
};
export default Footer;
