import classNames from "classnames";
import { BoardsOverlay, Title } from "@/components";
import { getBoardsFromDB } from "./actions";
import styles from './page.module.scss'

export default async function Home() {
  const data = await getBoardsFromDB()
  return (
    <main>
      <section>
      <div className={classNames(styles['home__content-wrapper'])}>
        <Title as='h1'>Welcome to Boards Library!</Title>
        <p>Please, select a Board to start working with.</p>
          <BoardsOverlay data={data} />
      </div>
      </section>
    </main>
  )
}
