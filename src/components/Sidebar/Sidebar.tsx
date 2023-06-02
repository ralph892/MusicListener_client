import React from 'react';
import Image from 'next/image';


import {LuListMusic} from 'react-icons/lu';
import {AiOutlineHome} from 'react-icons/ai';
import {RiNeteaseCloudMusicLine, RiMusic2Line, RiDiscLine, RiRadio2Line ,RiMicLine,
        RiPieChartLine,RiHeartLine,RiHistoryLine, RiMusicFill, RiLock2Line,
        RiCalendarEventLine, RiPagesLine, RiAddCircleLine, RiErrorWarningLine} from 'react-icons/ri';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='sidebar-wrapper'>
        <div className='sidebar-heading'>
            <Image className='heading-logo' src='/logo.svg' alt='logo-img' width={105} height={45}></Image>
            <LuListMusic className='heading-icon'/>
        </div>
        <div className='sidebar-list'>
          <ul className='list-wrapper'>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <AiOutlineHome className='item-icon'/>
                Home
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item' >
                <RiNeteaseCloudMusicLine className='item-icon'/>
                Genres
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiMusic2Line className='item-icon'/>
                Free Music
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiDiscLine className='item-icon'/>
                Albums
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiMicLine className='item-icon'/>
                Artists
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiRadio2Line className='item-icon'/>
                Stations
              </a>
            </li>
            <li className='list-item-heading'>
              Music
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiPieChartLine className='item-icon'/>
                Analytics
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiHeartLine className='item-icon'/>
                Favorites
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiHistoryLine className='item-icon'/>
                History
              </a>
            </li>
            <li className='list-item-heading'>
              Events
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiCalendarEventLine className='item-icon'/>
                Events
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiPagesLine className='item-icon'/>
                Event Details
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiAddCircleLine className='item-icon'/>
                Add Details
              </a>
            </li>
            <li className='list-item-heading'>
              About
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiLock2Line className='item-icon'/>
                Privacy
              </a>
            </li>
            <li className='list-item-wrapper'>
              <a href='#' className='list-item'>
                <RiErrorWarningLine className='item-icon'/>
                Notice
              </a>
            </li>
          </ul>
        </div>
        <div className='sidebar-footer'>
          <button className='sidebar-btn'>
            <RiMusicFill className='btn-icon' />
            Add Music
          </button>
        </div>
    </div>
  )
};

export default Sidebar;