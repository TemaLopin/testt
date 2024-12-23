import clsx from 'clsx'
import s from './styles.module.scss'

export const WhereBuyPC = () => {
  return (
    <div className={s.container}>
      <p>Купить можно здесь</p>
      <div className={s.button_container}>
        <a
          target='_blank'
          href='https://www.wildberries.ru/catalog/305561481/detail.aspx?targetUrl=GP'
          className={s.wb}
        />
        <a target='_blank' href='https://ozon.ru/t/KYN7wA7' className={s.ozon} />
      </div>
      <a href='#notRF' className={clsx('blue_link', s.not_rf)}>
        Если вы не в РФ
      </a>
    </div>
  )
}
