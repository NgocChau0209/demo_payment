import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss';
import Section from '../components/Layouts/Section/Section'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <Section>
          Số dư

        </Section>
      </div>
    </div>
  )
}

export default Home
