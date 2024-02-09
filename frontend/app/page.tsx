import classNames from "classnames";
import { BoardsOverlay, Title } from "@/components";
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <section>
      <div className={classNames(styles['home__content-wrapper'])}>
        <Title as='h1'>Welcome to Boards Library!</Title>
        <p>Please, select a Board to start working with.</p>
        <BoardsOverlay/>
      </div>
      </section>
    </main>
  )
}
