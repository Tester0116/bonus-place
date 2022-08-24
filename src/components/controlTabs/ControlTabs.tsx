import React, { useId } from 'react'
import { Link, useLocation } from 'react-router-dom';
import exitLogo from "../../assets/icons/contact/Exit.svg";
import "./ControlTabs.scss"
interface itemsType {
	icon: string,
	id: string,
	name: string,
	link: string,
}

interface propsType {
	items: itemsType[]
}
function ControlTabs({ items}: propsType) {

	const getLocation = ():string=>{
        let location = useLocation().pathname.split("/");
        return (location.length<3) ? "" : location[location.length-1]
    }
		
  const activeLocation:string = getLocation();
	const uniqId = useId();

	return (
		<div className="control-tabs">
			{
				items.map((item: itemsType, index: number) => (
					<li key={`${uniqId}__card__${index}`}>
						<Link to={item.link} >
							<div className={item.link === activeLocation ? "control-tabs__item control-tabs__item--active" : "control-tabs__item"}>
								<svg>
									<use href={item.icon + item.id} />
								</svg>
								<span>{item.name}</span>
							</div>
						</Link>
					</li>
				))
			}
			<li>
				<p className='exit'>Выйти из аккаунта</p>
				<svg className='exit-svg'>
					<use href={exitLogo + "#exit"}></use>
				</svg>
			</li>
		</div>
	)
}

export default ControlTabs;