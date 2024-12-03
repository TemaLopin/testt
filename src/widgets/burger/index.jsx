import { useState } from 'react'
import { ReactComponent as CrossIcon } from '../../shared/assets/icons/cross.svg'
import { ReactComponent as BurgerIcon } from '../../shared/assets/icons/burger.svg'
import s from './styles.module.scss'
import clsx from 'clsx'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (route) => {
    if (typeof route === 'string') window.location.replace(route)
    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <button className={s.button} onClick={handleClick}>
        <BurgerIcon />
      </button>

      <div className={clsx(s.menu, isOpen && s.active)}>
        <div>
          <p onClick={() => handleClick('#howToPlay')}>Как играть?</p>
          <p onClick={() => handleClick('#phone')}>Смартфон за отзыв</p>
          <p onClick={() => handleClick('#notRF')}>Если вы не в РФ</p>
          <p onClick={() => handleClick('#gamehack')}>Геймхаки</p>
          <p onClick={() => handleClick('#merch')}>Мерч</p>
          <p onClick={() => handleClick('#feetback')}>Обратная связь</p>
        </div>
        <button onClick={handleClick}>
          <CrossIcon />
        </button>
      </div>
    </div>
  )
}
