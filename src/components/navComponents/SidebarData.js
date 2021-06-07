import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';




export const SidebarData  = [

  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Search Page',
    path: '/SearchPage',
    icon: <IoIcons.IoIosSearch />
  },

  {
    title: 'Family',
    path: '/family',
    icon: <FaIcons.FaUsers />
  },

  {
    title: 'MyList',
    path: '/myList',
    icon: <FaIcons.FaList />
  },

  {
    title: 'Cart',
    path: '/Cart',
    icon: <FaIcons.FaCartPlus/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }

];