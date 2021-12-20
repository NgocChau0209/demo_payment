import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { getBankAccountListRedux, getTransactionListRedux } from "module/redux";
import {
  useQuery
} from "@apollo/client";
import { queriesAxies } from './queries';
import classnames from "classnames";
import BankCard from 'components/Card/Card';
import styles from 'styles/pages/index.module.scss';
import Section from 'components/Layouts/Section/Section';
import TransactionCard from 'components/Home/Transaction/Transaction';


const Home: NextPage = () => {
  let cardList = useSelector(state => state.card.list) || [];
  const transactionList = useSelector(state => state.transaction.list) || [];
  // const getOnesignalId = async () => {
  //   console.log('start')
  //   if (window.OneSignal) {
  //     const userId = await window.OneSignal.getUserId();
  //     console.log(userId);
  //     return userId
  //   } else {
  //     console.log('none');
  //     return null;
  //   }
  // }

  useEffect(() => {
    function getAllCard() {
      getBankAccountListRedux();
    }
    getAllCard();
    // getOnesignalId();
  }, [])


  useEffect(() => {
    async function getTransactionList() {
      getTransactionListRedux();
    }
    getTransactionList();
  }, [])

  return (
    <div className={styles.home_page}>
      <div className={styles.left}>
        <Section header="Thống kê" />
      </div>
      <div className={styles.right}>
        <div className={styles.right_top}>
          <Section header="Quản lí thẻ">
            <div className={styles.card_list}>
              {cardList.length && <i className={classnames("bx", "bx-chevron-left")} style={{ fontSize: "30px" }}></i>}
              <div className={styles.card_info}>
                {cardList.length && cardList.map((item) => {
                  return (
                    <a className={styles.card} href={`/card/${item._id}`} key={item._id}>
                      <BankCard stylesProps={{ container: { width: "355px", height: "200px" } }} isLoadInfo={true} cardnumber={item.accountNumber} name={item.accountHolder} id={item._id} />
                    </a>
                  )
                })}
              </div>
              {cardList.length && <i className={classnames("bx", "bx-chevron-right")} style={{ fontSize: "30px" }}></i>}
            </div>
            <a className={styles.add_card} href="/card/add">
              <i className={classnames("bx", "bx-credit-card")} ></i>
              <span className={classnames("text-14", "text_link")}>Thêm liên kết thẻ</span>
              <i className={classnames("bx", "bx-plus")}></i>
            </a>

          </Section>
        </div>
        <div className={styles.right_bottom}>
          <Section header="Giao dịch" styleProps={{ content: { height: '330px' } }}>
            {transactionList.length && transactionList.map((item) => {
              return <TransactionCard title={item.title} time={item.time} amount={item.amount} _id={item._id} income={item.income} />
            })}
          </Section>
        </div>

      </div>

    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.page_content}>
        hello
      </div>
      <div className={styles.right_bar}>
        <div className={styles.transaction}>
          <div className={styles.title}>
            <p className={classnames(styles.header, "text-22")}>Giao dịch</p>
            <p className={classnames(styles.seemore, "text-18")}>Xem thêm</p>
          </div>
          <div className={styles.right_content}>
            {transactionList.map((item, index) => {
              return <TransactionCard {...item} key={index} isLastItem={index === transactionList.length - 1} />
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
