import Photo from '../../../shared/assets/photo/main-pc.png'
import MainCards from '../../../shared/assets/photo/main-cards-pc.png'
import { WhereBuyPC } from '../../../shared/ui/where-buy/pc'
import s from './styles.module.scss'
import useWindowDimensions from '../../../shared/hooks/useWindowDimensions'

export const MainPC = () => {
  const { width } = useWindowDimensions()

  return (
    <>
      <div className={s.container}>
        <img src={Photo} className={s.image} />

        <div className={s.body}>
          <img src={MainCards} className={s.cards} />
          {width > 1700 && (
            <div className={s.wherebuy}>
              <WhereBuyPC />
            </div>
          )}
        </div>
      </div>
      {width > 1200 && width < 1700 && (
        <div className={s.wherebuy}>
          <WhereBuyPC />
        </div>
      )}
    </>
  )
}
