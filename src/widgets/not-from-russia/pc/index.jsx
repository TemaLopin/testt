import clsx from 'clsx'
import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/computer.png'
import { ContainerLG } from '../../../shared/ui/container-lg'

export const NotFromRussiaPC = () => {
  return (
    <ContainerLG img={Photo} id={'notRF'}>
      <p className={clsx('title', s.title)}>Если вы не в РФ</p>

      <p className={clsx('description_text', s.description_text)}>
        Находишься за пределами России, но хочешь стать обладателем нашей игры? Мы отправим её почтовой службой EMS.
        Финальную стоимость с учётом пересылки уточняйте в <a href='#'>чате</a>.
      </p>
      <p className={clsx('description_subtext', s.description_subtext)}>
        Наша игра финиширует на твоём адресе где бы ты ни был!
      </p>
    </ContainerLG>
  )
}
