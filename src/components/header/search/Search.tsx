import React, { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import closeIcon from '../../../assets/icons/header/close-icon.svg'
import searchLogo from "../../../assets/icons/header/search.svg"
import useOutsideClick from '../../../hooks/useOutsideClick'
import { ISearchByTitle } from '../../../models/coupon'
import { couponsApi } from '../../../redux/api/couponsApi'
import "./Search.scss" //kek
interface searchProps {
  search: string,
  menuInputOpen: boolean
  setSearch: ((value:string)=>void)
  onChangeInput: ((value:string)=>void);
  setMenuInputOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void
  searchByTitle: ISearchByTitle[] | undefined
  onClickPrompt: ((value:string)=>void);
}
const Search: FC<searchProps> = ({search, onChangeInput, setSearch, onClickPrompt, menuInputOpen, setMenuInputOpen , searchByTitle}) => {
  const [visiblePrompt, setVisiblePrompt] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onChangeSearch = (e: FormEvent<HTMLInputElement>): void => {
    setVisiblePrompt(search.length > 0);
    onChangeInput(e.currentTarget.value);
  }
  useEffect(() => {
    useOutsideClick(setVisiblePrompt, modalRef);
  }, [])

  return (
    <>
      <div className="header__search-block--input-block" ref={modalRef}>
        <input
          className="header__search-block--input"
          placeholder="Поиск"
          value={search}
          onChange={onChangeSearch}
        />
        <img
          className="header__search-block--search"
          src={searchLogo}
          alt="search icon"
          onClick={() => console.log('0')}
        />
        {/* for mini screens  */}
        <img
          className="header__search-block--search-burger"
          src={menuInputOpen ? closeIcon : searchLogo}
          alt="search icon"
          onClick={() => {
            document.body.classList.toggle('scrollNo')
            setMenuInputOpen(!menuInputOpen)
          }}
        />
        { 
        searchByTitle &&
          searchByTitle.length > 0 && visiblePrompt ?
            <div className="search-prompt">
              <ul>
                {
                  searchByTitle?.map((element, index) => (
                    <li key={index} onClick={()=> onClickPrompt(element.title)}>{element.title}</li>
                  ))
                }
              </ul>
            </div> : ""
        }
      </div>
    </>
  )
}
export default Search