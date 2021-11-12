import { userInfo } from "../../data/user"
import styles from "../../styles/pages/User.module.scss"
import { replaceCharacter } from "../../module/common";
export default function Profile() {

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