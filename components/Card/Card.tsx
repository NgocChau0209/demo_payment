import { cardList } from "./cardList";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import classnames from "classnames";
import styles from "./Card.module.scss";
interface CardProps {
  category: string,
  name: string,
  cardnumber: string,
  month: number,
  year: number,
  id: string,
  isLoadInfo: boolean
  onDetele?: (id: string) => void
  stylesProps?: { container: {} }
  getCategoryCard?: ()=>{}
}

export default function Card({ name, cardnumber, month, year, id, onDetele, stylesProps, isLoadInfo = false , getCategoryCard}: CardProps) {
  const lightcolorRef = useRef(null);
  const darkcolorRef = useRef(null);
  let [ccSingle, setCcSingle] = useState(null);


  function deleteCard() {
    onDetele(id);
  }

  function mapType(number: string) {
    return cardList.find(item => {
      if (number.match(item.regex) != null) return item;
    });
  }

  function swapColor(basecolor: string) {
    let lightcolor = lightcolorRef.current;
    let darkcolor = darkcolorRef.current;
    if (!lightcolor || !darkcolor) return;
    lightcolor.setAttribute('class', '');
    lightcolor.setAttribute('class', 'lightcolor ' + styles[basecolor]);
    darkcolor.setAttribute('class', '');
    darkcolor.setAttribute('class', 'darkcolor ');
  }

  useEffect(() => {
    if (isLoadInfo) return;
    if (cardnumber.length <= 10) return;
    let categoryInfo = mapType(cardnumber) || null;
    if (!categoryInfo) return;
    let type= categoryInfo.cardtype
    setCcSingle(type);
    getCategoryCard(type);
    swapColor(categoryInfo?.color);
  }, [cardnumber])

  return (
    <div className={classnames(styles.container, "preload")} style={stylesProps?.container}>
      <div className={styles.card}>
        <div className={styles.front}>
          <div id={styles.ccsingle}>{ccSingle}</div>
          <svg
            version="1.1"
            id={styles.cardfront}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 750 471"
            xmlSpace="preserve"
            style={{ enableBackground: "new 0 0 750 471" }}
          >
            <g id="Front">
              <g id="CardBackground">
                <g id="Page-1_1_">
                  <g id="amex_1_">
                    <path
                      id="Rectangle-1_1_"
                      ref={lightcolorRef}
                      className={classnames(styles.lightcolor, styles.grey)}
                      d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                          C0,17.9,17.9,0,40,0z"
                    />
                  </g>
                </g>
                <path
                  ref={darkcolorRef}
                  className={classnames(styles.darkcolor, styles.greydark)}
                  d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                />
              </g>
              <text
                transform="matrix(1 0 0 1 60.106 295.0121)"
                id="svgnumber"
                className={classnames(styles.st2, styles.st3, styles.st4)}
              >
                {cardnumber}
              </text>
              <text
                transform="matrix(1 0 0 1 54.1064 428.1723)"
                id="svgname"
                style={{ textTransform: "uppercase" }}
                className={classnames(styles.st2, styles.st5, styles.st6)}
              >
                {name}
              </text>
              <text
                transform="matrix(1 0 0 1 54.1074 389.8793)"
                className={classnames(styles.st7, styles.st5, styles.st8)}
              >
                cardholder name
              </text>
              <text
                transform="matrix(1 0 0 1 479.7754 388.8793)"
                className={classnames(styles.st7, styles.st5, styles.st8)}
              >
                expiration
              </text>
              <text
                transform="matrix(1 0 0 1 65.1054 241.5)"
                className={classnames(styles.st7, styles.st5, styles.st8)}
              >
                card number
              </text>
              <g>
                <text
                  transform="matrix(1 0 0 1 574.4219 433.8095)"
                  id="svgexpire"
                  className={classnames(styles.st2, styles.st5, styles.st9)}
                >
                  {month}/{year}
                </text>
                <text
                  transform="matrix(1 0 0 1 479.3848 417.0097)"
                  className={classnames(styles.st2, styles.st10, styles.st11)}
                >
                  VALID
                </text>
                <text
                  transform="matrix(1 0 0 1 479.3848 435.6762)"
                  className={classnames(styles.st2, styles.st10, styles.st11)}
                >
                  THRU
                </text>
                <polygon
                  className={styles.st2}
                  points="554.5,421 540.4,414.2 540.4,427.9 		"
                />
              </g>
              <g id="cchip">
                <g>
                  <path
                    className={styles.st2}
                    d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                      c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                  />
                </g>
                <g>
                  <g>
                    <rect x="82" y="70" className={styles.st12} width="1.5" height="60" />
                  </g>
                  <g>
                    <rect
                      x="167.4"
                      y="70"
                      className={styles.st12}
                      width="1.5"
                      height="60"
                    />
                  </g>
                  <g>
                    <path
                      className={styles.st12}
                      d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                          c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                          C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                          c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                          c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                    />
                  </g>
                  <g>
                    <rect
                      x="82.8"
                      y="82.1"
                      className={styles.st12}
                      width="25.8"
                      height="1.5"
                    />
                  </g>
                  <g>
                    <rect
                      x="82.8"
                      y="117.9"
                      className={styles.st12}
                      width="26.1"
                      height="1.5"
                    />
                  </g>
                  <g>
                    <rect
                      x="142.4"
                      y="82.1"
                      className={styles.st12}
                      width="25.8"
                      height="1.5"
                    />
                  </g>
                  <g>
                    <rect
                      x="142"
                      y="117.9"
                      className={styles.st12}
                      width="26.2"
                      height="1.5"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="Back"></g>
          </svg>
        </div>

      </div>
    </div>
  )
}