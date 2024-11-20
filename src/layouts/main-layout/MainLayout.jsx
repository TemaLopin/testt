import { Burger, Footer } from '../../widgets'
import s from './styles.module.scss'

export const MainLayout = ({ children }) => {
  return (
    <div className={s.bg}>
      {/* <Burger /> */}
      <div className={s.container}>{children}</div>
    </div>
  )
}
