import React, {useId} from 'react';
import "./BreadCrumbs.scss"
import {Link} from "react-router-dom";

interface Props {
    location: {
        folder: string
        name: string;
    }[]
}

const BreadCrumbs: React.FC<Props> = (props: Props ) => {
    const location = props.location
    const folders = location.map(item => item.folder)
    const crumbId = useId()

    return (
        <div className='breadCrumbs'>
            <Link to={'/'}>
                <span className={"folder"}>Главная</span>
            </Link>
            {
                location.map((item, index) => {
                        return (
                            <div className={'crumb'} key={`${crumbId}__${index}`}>
                                <span className={"divider"}>/</span>
                                {index+1 === location.length ?
                                    <span className={"folder"}>{item.name}</span>
                                    :
                                    <Link to={'/' + folders.filter((folder, i) => i <= index).join('/')}>
                                        <span className={"folder"}>{item.name}</span>
                                    </Link>
                                }
                            </div>)
                    }
                )
            }
        </div>
    );
};

export default BreadCrumbs;