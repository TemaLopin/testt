import s from './styles.module.scss'
import MainPhoto from '../../shared/assets/photo/main-mobile.png'
import clsx from 'clsx'

export const Main = () => {
  return (
    <div className={clsx('container', s.container)}>
      <img className={s.smallImage} src={MainPhoto} alt='main-image' />
    </div>
  )
}
