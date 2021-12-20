import styles from './Loading.module.scss';

interface LoadingProps {
      isLoading: boolean,
      children: React.ReactNode
}

export default function Loading({ isLoading = false, children }: LoadingProps) {
      return (
            <>
                  {isLoading ? (<div className={styles.container}>
                        <div className={styles.content}>
                              <div className={styles.ldsEllipsis}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                              </div>
                        </div>
                  </div>)
                        : children}
            </>
      )
}