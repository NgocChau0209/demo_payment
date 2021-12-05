import { userInfo } from "../../data/user"
import styles from "../../styles/pages/User.module.scss"
import { replaceCharacter } from "../../module/common";
import { useState, useEffect } from "react";
import { instance as api } from "../../services/api";
export default function Profile() {
    const [profile, setProfile] = useState({})
    useEffect(async () => {
        const res = await api.post('/', {
            id: "618ca8cb287a244a3b1c1d8c",
        })
    }, [])

    return (
        <>
            Thông tin cá nhân
            <div className={styles.item}>
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
            </div>
        </>
    )
}