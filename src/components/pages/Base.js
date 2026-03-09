import React, { useState, useRef } from "react";
import {
  Navbar, Typography, Button,
  Menu, MenuHandler,
  MenuList, MenuItem, Avatar
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import {BsFillPersonFill, BsFillBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "../Sidebar";

function Base() {

    const apiDomain = process.env.REACT_APP_API_DOMAIN
    const token = localStorage.getItem('mytoken')


    const  ProfileMenu = () => {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const closeMenu = () => {
            setIsMenuOpen(false);
            localStorage.clear();
        }

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
                src="../images/default_profile_logo.jpg"
            />
            <BiChevronDown/>
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
            return (
                <>
                <Link to=''>
                        <MenuItem
                            className={`flex items-center gap-2 rounded`}
                        >
                            {React.createElement(BsFillBellFill, {
                            className: `h-4 w-4 `,
                            strokeWidth: 2,
                            })}
                            <Typography
                            as="span"
                            variant="small"
                            className="font-normal"

                            >
                            Notifications
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/base/profile'>
                        <MenuItem
                            className={`flex items-center gap-2 rounded`}
                        >
                            {React.createElement(BsFillPersonFill, {
                            className: `h-4 w-4 `,
                            strokeWidth: 2,
                            })}
                            <Typography
                            as="span"
                            variant="small"
                            className="font-normal"

                            >
                            My Profile
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/'>
                        <MenuItem
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded `}
                        >
                            {React.createElement(BiLogOut, {
                            className: `h-4 w-4`,
                            strokeWidth: 2,
                            })}
                            <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="inherit"
                            >
                            Sign Out
                            </Typography>
                        </MenuItem>
                    </Link>
                </>
            );
        </MenuList>
      </Menu>
    );
  }

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
                src="../images/company.png"
                alt="course_logo"
                className="relative inline-block h-10 w-fit object-cover object-center"
            />
          </Typography>
        <div className="flex items-center gap-4">
            {ProfileMenu()}
        </div>
        </div>
      </Navbar>
    <div className='grid grid-cols-5 gap-2'>
        <div className="col-span-1">
                <Sidebar />
            </div>
            <div className='col-span-4'>
                <Outlet />
            </div>
        </div>
    </>
  );
}

export default Base;