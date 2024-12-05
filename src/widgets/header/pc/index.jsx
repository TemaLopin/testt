import s from './styles.module.scss'

export const Header = () => {
  const handleClick = (route) => {
    if (typeof route === 'string') window.location.replace(route)
  }

  return (
    <div className={s.bg}>
      <div className={s.container}>
        <ul>
          <li onClick={() => handleClick('#howToPlay')}>Как играть?</li>
          {/* <li onClick={() => handleClick('#phone')}>Смартфон за отзыв</li> */}
          <li onClick={() => handleClick('#notRF')}>Если вы не в РФ</li>
          <li onClick={() => handleClick('#gamehack')}>Геймхаки</li>
          <li onClick={() => handleClick('#merch')}>Мерч</li>
          <li onClick={() => handleClick('#feetback')}>Обратная связь</li>
        </ul>
      </div>
    </div>
  )
}
