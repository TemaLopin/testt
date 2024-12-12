import Photo from '../../../shared/assets/photo/main-pc.png'
import MainCards from '../../../shared/assets/photo/main-cards-pc.png'
import { WhereBuyPC } from '../../../shared/ui/where-buy/pc'
import s from './styles.module.scss'
import useWindowDimensions from '../../../shared/hooks/useWindowDimensions'
import { ContainerLG } from '../../../shared/ui/container-lg'

export const MainPC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={Photo} />
      </div>
      <div className={s.text_body}>
        <div className={s.right_side}>
          <img src={MainCards} className={s.cards} />
          {/* {width > 1700 && ( */}
          <div className={s.wherebuy}>
            <WhereBuyPC />
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}
