import s from './styles.module.scss'
import { ReactComponent as Logo } from '../../../shared/assets/icons/logo.svg'

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className='container'>
        <Logo className={s.logo} />
        <div className={s.about}>
          <p>Автор</p>
          <span>Шевелёв В.</span>
          <p>Соавтор</p>
          <span>Сапронов Н.</span>
          <p>Редактор</p>
          <span>Кузнецова Е.</span>
          <p>Правообладатель</p>
          <span>ИП Шевелёв В.Ю.</span>
        </div>
        <div className={s.description}>
          <span>
            Игра несёт развлекательно - познавательную функцию. Предназначена для аудитории  18+ и содержит посыл для
            побуждения чувственных практик, которые способствуют укреплению традиционных семейных отношений. Напоминает
            о рисках незащищённых половых связях, важности позитивного социального поведения, здорового образа жизни,
            регулярных проверок здоровья, а также в игровой форме призывает к профилактике заболеваний, передающихся
            половым путём.
          </span>
        </div>
        <div className={s.copyright}>
          <a href={'#'}>Праововая информация</a>
          <span>Copyright 2025 ©</span>
        </div>
      </div>
    </div>
  )
}
