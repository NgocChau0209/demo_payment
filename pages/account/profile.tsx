import styles from "styles/pages/User.module.scss"
import { replaceCharacter } from "module/common";
import { useState, useEffect } from "react";
import { api } from "services/api";
import { userAPI } from "services/user";
import { useSelector } from 'react-redux';


export default function Profile({ userInfo }) {
    return (
        <>
            Thông tin cá nhân
            {/* <div className={styles.item}>
                <p className={styles.title}>
                    Họ và tên
                </p>
                <p className={styles.value}>
                    {userInfo.userName}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.title}>
                    Số điện thoại
                </p>
                <p className={styles.value}>
                    {replaceCharacter(userInfo.phoneNumber, '*', 0, 7)}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.title}>
                    Số CMND/ hộ chiếu
                </p>
                <p className={styles.value}>
                    {userInfo.identify}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.title}>
                    Địa chỉ
                </p>
                <p className={styles.value}>
                    {userInfo.address}
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.title}>
                    Email
                </p>
                <p className={styles.value}>
                    {userInfo.email}
                </p>
            </div> */}
        </>
    )
}


// export async function getStaticProps() {
//     const userId =  useSelector((state) => state?.user?.info._id);
//     const userInfo = await userAPI.getProfile(userId);
//     console.log(userInfo)
//     return {
//         props: {
//             userInfo: null
//         },
//     }
// }