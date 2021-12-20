import styles from './Dialog.module.scss';
import { Button } from 'components/Button/Button';
import { useState } from 'react';

interface DialogProps{
      content: string,
      isOpen: boolean,
}

export default function Dialog({ content = '', isOpen = false }) {
      let [isOpenDialog,setOpenDialog] = useState(isOpen);

      function handleCloseDialog() {
            // closeDialog();
      }

      return (
            <>
                  {isOpenDialog === true &&
                        <div className={styles.container}>
                              <div className={styles.overlay}>
                                    <div className={styles.content}>
                                          {content}
                                          <div className={styles.button}>
                                                {/* <Button text="Đóng" /> */}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  }
            </>
      )
}