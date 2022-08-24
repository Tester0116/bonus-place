import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import closeIcon from '../../../assets/icons/header/close-icon.svg'

import './Menu.scss'

export interface IBurgerProps {
  className?: string
  title?: string
  active?: boolean
  setActive: (value: boolean | ((prevVar: boolean) => boolean)) => void
  favorite?: any
  ticket?: any
  logIn?: any
}

export const BurgerComponent: React.FC<IBurgerProps> = ({
  active = false,
  setActive,
  favorite,
  title,
  ticket,
}) => {
  const searchMedias = [
    { img: favorite, text: 'Избранное' },
    { img: ticket, text: 'Мои купоны' },
  ]

  const hideMenu = () => setActive(false)

  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <Link className="menu__title" to={'/auth/signin'} onClick={hideMenu}>
          {title}
        </Link>
        <img
          className="menu__close"
          src={closeIcon}
          alt="close icon"
          onClick={() => {
            document.body.classList.remove('scrollNo')
            hideMenu()
          }}
        />
        <ul className="menu__nav-media">
          <li className="menu__nav-item">
            <Link to="/profile" onClick={hideMenu}>
              О нас
            </Link>
          </li>
          <li className="menu__nav-item">
            <Link to="profile/help" onClick={hideMenu}>
              Помощь
            </Link>
          </li>
          <li className="menu__nav-item">
            <Link to="profile/contact" onClick={hideMenu}>
              Контакты
            </Link>
          </li>
        </ul>
        <ul className="menu__favorites-block">
          {searchMedias.map((media, index) => (
            <li className="menu__favorites-block--item" key={index}>
              <img
                className="menu__favorites-block--icon"
                src={media.img}
                alt="heart"
              />
              <span className="menu__favorites-block--item-text">
                {media.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="menu__phone-block">
          <span className="header__phone-block--text">Тел. для справки:</span>
          <a href="tel:+996706669951">
            <b className="header__phone-block--phone">+996 000 00 00 00</b>
          </a>
        </div>
      </div>
    </div>
  )
}

export const BurgerMenu = memo(BurgerComponent)
