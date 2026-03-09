import SideBarTab from "./SidebarTab";
import {
    BsFillCalendarCheckFill,
    BsFillHouseDoorFill,
    BsFillPersonPlusFill,
    BsFillPersonLinesFill
} from "react-icons/bs";
import { Link } from 'react-router-dom';
import {FaMoneyCheckAlt, FaRegNewspaper} from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { VscRequestChanges } from "react-icons/vsc";
import { GrFormClose } from "react-icons/gr";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

function Sidebar() {
    let employee_detail = JSON.parse(localStorage.getItem('employee_detail'));
    const open = () => {
        document.querySelector('.sidebar').classList.toggle('left-[-300px]');
    }
    let sideBarClass = "fixed sidebar  bottom-0 top-[50px] lg:left-0 left-[-300px] p-2 w-[300px] overflow-y auto text-center bg-gray-900"
    let icon_classname = "bi bi-box-arrow-in-right"


    return (
        <div className=''>
            <span className="absolute text-white text-4-xl top-5 left-4 cursor-pointer" onClick={open}>
                <TbLayoutSidebarRightCollapse className="bi bi-filter-left px-6 bg-gray-900 rounded-md"/>
            </span>
            <div className={sideBarClass}>
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex item-center">
                        <GrFormClose className="bi bi-x ml-20 cursor-pointer lg:hidden bg-white" onClick={open}/>
                    </div>
                </div>
                <Link to='/base/dashboard'>
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <BsFillHouseDoorFill className={icon_classname}/>
                        <span className="text-[15px] ml-4 text-gray-200">Dashboard</span>
                    </div>
                </Link>
                <hr className="my-2 text-gray-600"/>
                <Link to='/base/employee_list'>
                    <SideBarTab title="Employees" icon={<BsFillPersonLinesFill className={icon_classname} />}/>
                </Link>

                {/* <Link to=''>
                    <SideBarTab title="Time and Attendance" icon={<BsFillCalendarCheckFill className={icon_classname} />}/>
                </Link> */}
                {/* {
                    employee_detail.user_type === 3 || <>
                        <Link to='#'>
                            <SideBarTab title="Payroll & Benefits" icon={<FaMoneyCheckAlt className={icon_classname} />}/>
                        </Link>
                    </>
                } */}
                {/* <Link to=''>
                    <SideBarTab title="News and Announcements" icon={<FaRegNewspaper className={icon_classname} />}/>
                </Link>
                <Link to='' >
                    <SideBarTab title="Training and Development" icon={<GiMuscleUp className={icon_classname} />}/>
                </Link> */}
                {/* <Link to='#'>
                    <SideBarTab title="My request" icon={<VscRequestChanges className={icon_classname} />}/>
                </Link> */}
            </div>
    </div>
    )
}
export default Sidebar