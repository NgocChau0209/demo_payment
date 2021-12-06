import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/index.module.scss';
import Section from '../components/Layouts/Section/Section'
import { useDispatch, useSelector } from 'react-redux';
import { setSideBar } from '../controller/redux/action/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import {
  useQuery
} from "@apollo/client";
import { queriesAxies } from './queries';
import { numberWithCommas } from "../module/common";
import rechargeMoneyIcon from "../public/images/cash-recharge.png";
import transferMoneyIcon from "../public/images/transfer-money.png";
import widthDrawMoneyIcon from "../public/images/width-draw-money.png";
import historyTransactionIcon from "../public/images/history-icon.jpeg";
import Link from 'next/link'
import OneSignal from 'react-onesignal';
const Home: NextPage = () => {
  let userInfo = useSelector(state => state.user.info);

  useEffect(() => {

    // OneSignal.init({
    //   appId: "32045294-ebc9-4087-96d6-d1291a602d06",
    //   notifyButton: {
    //     enable: true,
    //   },

    //   allowLocalhostAsSecureOrigin: true,
    // });
  }, []);

  return (
    <>
      
      <div className={styles.container}>

        <div className={styles.user}>
          <Section styleProps={{ width: '400px', textAlign: 'center' }}>
            <p>{userInfo?.userName}</p>
            <p>{userInfo?.phoneNumber}</p>
            <p>{numberWithCommas(userInfo?.balance)}</p>
          </Section>
        </div>

        <div className={styles.function}>
          <Section styleProps={{ width: '120px', height: '120px' }}>
            <Link href="/">
              <div className={styles.functionItem}>
                <Image src={rechargeMoneyIcon} alt="" width={50} height={50} />
                <p className={styles.functionText}>Nạp tiền</p>
              </div>
            </Link>
          </Section>
          <Section styleProps={{ width: '120px', height: '120px' }}>
            <Link href="/transaction">
              <div className={styles.functionItem}>
                <Image src={historyTransactionIcon} alt="" width={50} height={50} />
                <p className={styles.functionText}>Giao dịch</p>
              </div>
            </Link>
          </Section>
          <Section styleProps={{ width: '120px', height: '120px' }}>
            <Link href="/transaction/transfer-money">
              <div className={styles.functionItem}>
                <Image src={transferMoneyIcon} alt="" width={50} height={50} />
                <p className={styles.functionText}>Chuyển tiền</p>
              </div>
            </Link>
          </Section>
          <Section styleProps={{ width: '120px', height: '120px' }}>
            <Link href="/">
              <div className={styles.functionItem}>
                <Image src={widthDrawMoneyIcon} alt="" width={50} height={50} />
                <p className={styles.functionText}>Rút tiền</p>
              </div>
            </Link>
          </Section>
        </div>
      </div>
    </>

  )
}

export default Home
