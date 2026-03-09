
function SideBarTab ({title, icon}) {
    return (
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        {icon}
        <span className="text-[15px] ml-4 text-gray-200">{title}</span>
    </div>
    )
}

export default SideBarTab;