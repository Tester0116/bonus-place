import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BurgerMenu } from './menu/Menu';

import favorite from '../../assets/icons/header/favorite.svg'
import burger from '../../assets/icons/header/burger.svg'
import ticket from '../../assets/icons/contact/tiket.svg'
import logIn from '../../assets/icons/header/log-in.svg'
import logo from '../../assets/icons/header/logo.svg'

import './Header.scss'
import useScrollDirection from '../../hooks/useScrollDirection'
import Search from './search/Search';
import { useAppDispatch } from '../../hooks/redux';
import { searchBy } from '../../redux/reducers/searchSlice'
import { couponsApi } from '../../redux/api/couponsApi';
import { ISearchByTitle } from '../../models/coupon';


const Header: FC = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [menuInputOpen, setMenuInputOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  const onChangeInput = (value: string) => {
    dispatch(searchBy(value));
    setSearch(value);
  }

  const onClickPrompt = (value:string)=>{
    setSearch(value);
    dispatch(searchBy(value));
    navigate("/search", { replace: true });
  }

  const { data: searchByTitle, isLoading: isHeaderLoading  } = couponsApi.useSearchByTitleQuery(search);

  return (
    <header
      className={`header ${scrollDirection === 'down' ? 'hide' : 'show'}`}
    >
      <div className="header__nav-block">
        <div className="container">
          <div className="header__nav-container">
            <nav className="header__nav">
              <ul className="header__nav-media">
                <li className="header__nav-item">
                  <Link to="/profile">О нас</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="profile/help">Помощь</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="profile/contact">Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="header__phone-block">
              <span className="header__phone-block--text">
                Тел. для справки:
              </span>
              <a href="tel:+996706669951">
                <b className="header__phone-block--phone">+996 000 00 00 00</b>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__search-block">
        <div className="container">
          <div className="header__search-container">
            <Link to="/" className="header__search-block--logo">
              <img src={logo} alt="logo" />
            </Link>
            {
              <Search
                onChangeInput={onChangeInput}
                search={search}
                setSearch={setSearch}
                menuInputOpen={menuInputOpen}
                setMenuInputOpen={setMenuInputOpen}
                searchByTitle={searchByTitle}
                onClickPrompt={onClickPrompt}
              />}
            <img
              className="header__search-block--burger"
              src={burger}
              alt="burger icon"
              onClick={() => {
                document.body.classList.add('scrollNo')
                setMenuInputOpen(false)
                setOpenBurger(!openBurger)
              }}
            />
            <BurgerMenu
              favorite={favorite}
              ticket={ticket}
              logIn={logIn}
              active={openBurger}
              setActive={setOpenBurger}
              title="Войти"
            />
            <ul className="header__search-block--media">
              {/* ----- favorite ----- */}
              <li onClick={() => navigate('/favorites')} className="header__search-block--item">
                <img
                  className="header__search-block--icon"
                  src={favorite}
                  alt="heart"
                />
                <span className="header__search-block--item-text">
                  Избранное
                </span>
              </li>
              {/* ----- ticket ----- */}
              <li className="header__search-block--item with-line">
                <img
                  className="header__search-block--icon"
                  src={ticket}
                  alt="ticket"
                />
                <span className="header__search-block--item-text">
                  Мои купоны
                </span>
              </li>
              {/* ----- log in ----- */}
              <li className="header__search-block--item">
                <img src={logIn} alt="logIn" />
                <Link to={'/auth/signin'}>
                  <span className="header__search-block--item-text login">
                    Войти
                  </span>
                </Link>
              </li>
              {/* ----- end ----- */}
            </ul>
          </div>
        </div>
        {menuInputOpen && (
          <div className="header__menu-mode">
            <input className="header__menu-mode--input" placeholder="Поиск" onChange={(e)=>onChangeInput(e.currentTarget.value)}/>
            {
              searchByTitle &&
                searchByTitle.length > 0 ?
                <div className="search-prompt__menu-mode">
                  <ul>
                    {
                      searchByTitle?.map((element:ISearchByTitle, index:number) => (
                        <li key={index} onClick={()=> onClickPrompt(element.title)}>{element.title}</li>
                      ))
                    }
                  </ul>
                </div> : ""
            }
          </div>
        )}
      </div>
    </header >
  )
}

export default Header
