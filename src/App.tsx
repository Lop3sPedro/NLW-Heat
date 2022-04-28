import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';

import { MessegeList } from './components/MessageList';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessegeList />
      <LoginBox />
    </main>
  )
}
