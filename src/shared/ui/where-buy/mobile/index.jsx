import clsx from 'clsx'
import s from './styles.module.scss'

export const WhereBuy = () => {
  return (
    <>
      <div className={clsx('container')}>
        <div className={s.container}>
          <p>Купить можно здесь</p>
          <a href='#' className={s.ozon}></a>
          <a href='#' className={s.wb}></a>
        </div>
        <a href='#' className={clsx('blue_link', s.not_rf)}>
          Если вы не в РФ
        </a>
      </div>
    </>
  )
}
