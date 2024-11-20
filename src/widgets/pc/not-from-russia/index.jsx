import clsx from 'clsx'
import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/computer.png'

export const NotFromRussiaPC = () => {
  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={Photo} />
      </div>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Если вы не в РФ</p>

        <p className={clsx('description_text', s.description_text)}>
          Находишься за пределами России, но хочешь стать обладателем нашей игры? Мы отправим её почтовой службой EMS.
          Финальную стоимость с учётом пересылки уточняйте в чате.
        </p>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Наша игра финиширует на твоём адресе где бы ты ни был!
        </p>
      </div>
    </div>
  )
}
