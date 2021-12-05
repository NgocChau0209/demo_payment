import styles from './Dialog.module.scss';
import { Button } from '../Button/Button';
import { useState } from 'react';
export function Dialog({ content = '', isOpen = false , closeDialog}) {
      let [isOpenDialog] = useState(isOpen);

      function handleCloseDialog() {
            closeDialog(false);
      }

      return (
            <>
                  {isOpenDialog === true &&
                        <div className={styles.container}>
                              <div className={styles.overlay}>
                                    <div className={styles.content}>
                                          {content}
                                          <div className={styles.button}>
                                                <Button text="Đóng" onClickEvent={handleCloseDialog} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  }
            </>
      )
}