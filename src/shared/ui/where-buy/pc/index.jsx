import clsx from 'clsx'
import s from './styles.module.scss'

export const WhereBuyPC = () => {
  return (
    <>
      <div className={s.container}>
        <p>Купить можно здесь</p>
        <div className={s.button_container}>
          <a href='#' className={s.wb}></a>
          <a href='#' className={s.ozon}></a>
        </div>
        <a href='#' className={clsx('blue_link', s.not_rf)}>
          Если вы не в РФ
        </a>
      </div>
    </>
  )
}
