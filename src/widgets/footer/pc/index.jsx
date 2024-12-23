import s from './styles.module.scss'
import { ReactComponent as Logo } from '../../../shared/assets/icons/logo.svg'

export const FooterPC = () => {
  return (
    <div className={s.container}>
      <div className={s.footer_top}>
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
        <Logo className={s.logo} />
      </div>
      <div className={s.description}>
        <span>
          Игра несёт развлекательно - познавательную функцию. Предназначена для аудитории  18+ и содержит посыл для
          побуждения чувственных практик, которые способствуют укреплению традиционных семейных отношений. Напоминает о
          рисках незащищённых половых связях, важности позитивного социального поведения, здорового образа жизни,
          регулярных проверок здоровья, а также в игровой форме призывает к профилактике заболеваний, передающихся
          половым путём.
        </span>
      </div>
      <div className={s.copyright}>
        <span>Copyright 2025 ©</span>
      </div>
    </div>
  )
}
