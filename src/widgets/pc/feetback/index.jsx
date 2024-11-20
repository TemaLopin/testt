import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/message.png'
import clsx from 'clsx'

export const FeetBackPC = () => {
  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={Photo} />
      </div>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Обратная связь</p>

        <p className={clsx('description_text', s.description_text)}>
          Стань соавтором новой, еще более крутой версии игры, предложи свои идеи для улучшения игровых правил. Залетай
          в наш чат и предлагай свои идеи как сделать игру еще интереснее, пикантнее, познавательнее.
        </p>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Лучшие предложения мы обязательно учтем при создании следующей версии игры и щедро наградим авторов.
        </p>
      </div>
    </div>
  )
}
