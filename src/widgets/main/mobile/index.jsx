import Photo from '../../../shared/assets/photo/main-pc.png'
import MainCards from '../../../shared/assets/photo/main-cards-pc.png'
import { WhereBuyPC } from '../../../shared/ui/where-buy/pc'
import s from './styles.module.scss'
import clsx from 'clsx'

export const Main = () => {
  return (
    <div className={clsx('container', s.container)}>
      <img className={s.mainImage} src={Photo} alt='main-image' />
      <img className={s.smallImage} src={MainCards} />
    </div>
  )
}
