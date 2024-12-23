import clsx from 'clsx'
import s from './styles.module.scss'

export const WhereBuy = () => {
  return (
    <>
      <div className={clsx('container')}>
        <div className={s.container}>
          <p>Купить можно здесь</p>
          <a target='_blank' href='https://ozon.ru/t/KYN7wA7' className={s.ozon} />
          <a
            target='_blank'
            href='https://www.wildberries.ru/catalog/305561481/detail.aspx?targetUrl=GP'
            className={s.wb}
          />
        </div>
        <a href='#notRF' className={clsx('blue_link', s.not_rf)}>
          Если вы не в РФ
        </a>
      </div>
    </>
  )
}
