import { ContainerLG } from '../../../shared/ui/container-lg'
import Photo from '../../../shared/assets/photo/main-pc.png'
import MainCards from '../../../shared/assets/photo/main-cards-pc.png'
import { WhereBuyPC } from '../../../shared/ui/where-buy/pc'
import s from './styles.module.scss'

export const MainPC = () => {
  return (
    <div className={s.container}>
      <img src={Photo} className={s.image} />

      <div className={s.body}>
        <img src={MainCards} className={s.cards} />

        <WhereBuyPC />
      </div>
    </div>
  )
}
