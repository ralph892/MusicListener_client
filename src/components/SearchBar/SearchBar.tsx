import Image from 'next/image';
import React from 'react';

import {RiSearch2Line, RiEarthLine} from 'react-icons/ri';
import { SearchBar_Tooltip } from '../features/SearchBar_Tooltip';

type Props = {}

const SearchBar = (props: Props) => {

    const [tooltip, setTooltip] = React.useState(false);
    const [searching, setSearching] = React.useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearching(e.target.value);
    }

    const handleOnBlur = () => {
        setTooltip(false);
    }

    const handleOnClick = () => {
        setTooltip(true);
    }
    

  return (
   <>
        <div className='searchBar_wrapper'>
            <div className='overlay'></div>
            <div className='searchBar_container'>
                <div className='searchBar'>
                    <div className='searchBar_input_wrapper'>
                        <RiSearch2Line className='searchBar_input_icon'/>
                        <input 
                        type='text' 
                        className='searchBar_input' 
                        placeholder='Find your music...'
                        value={searching}
                        onClick={handleOnClick}
                        onChange={e => handleOnChange(e)}
                        onBlur={handleOnBlur}
                        >
                        </input>
                    </div>
                    <div className='searchBar_actions_wrapper'>
                        <div className='actions_language_wrapper'>
                            <RiEarthLine className='actions_language_icon'/>
                            Language
                        </div>
                        <div className='actions_user_wrapper'>
                            <Image src={'/images/avatar.jpg'} alt='avatar' width={32} height={32} className='actions_user_avatar'></Image>
                            Ralph
                        </div>
                    </div>
                    {tooltip && <SearchBar_Tooltip />}
                </div>
            </div>
        </div>
   </>
  )
};

export default SearchBar;