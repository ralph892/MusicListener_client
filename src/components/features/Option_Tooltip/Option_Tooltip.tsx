import React from 'react'

type Props = {}

const Option_Tooltip = (props: Props) => {
  return (
    <div className='option_tooltip_wrapper'>
        <ul className='option_tooltip'>
            <li className='option_tooltip_item'><a href='#'>Favorite</a></li>
            <li className='option_tooltip_item'><a href='#'>Add to playlist</a></li>
            <li className='option_tooltip_item'><a href='#'>Next to play</a></li>
            <li className='option_tooltip_item'><a href='#'>Share</a></li>
            <div className='option_tooltip_divide'></div>
            <li className='option_tooltip_item'><a href='#'>Play</a></li>
        </ul>
    </div>
  )
};

export default Option_Tooltip;