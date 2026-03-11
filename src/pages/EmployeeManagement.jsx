import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import CustomTable from '../components/CustomTable/CustomTable'
import filterIcon from '../assets/images/filterIcon.png'
import searchIcon from '../assets/images/searchIcon.png'

export const EmployeeManagement = () => {
    const [selectedName, setSelectedName] = useState(null)
    const [selectedDesignation, setSelectedDesignation] = useState(null)

    const nameOptions = [
        { label: 'Ravi Kumar', value: 'Ravi Kumar' },
        { label: 'Meena Raj', value: 'Meena Raj' },
        { label: 'Suresh P', value: 'Suresh P' },
        { label: 'Anitha S', value: 'Anitha S' },
    ]

    const designationOptions = [
        { label: 'Sales Manager', value: 'Sales Manager' },
        { label: 'Field Officer', value: 'Field Officer' },
        { label: 'Team Lead', value: 'Team Lead' },
        { label: 'Executive', value: 'Executive' },
    ]

    const data = [
        {
            "district": "Bangalore Urban",
            "village": "Whitefield"
        }
    ]

    const columns = [
        { field: "district", header: "District", style: { minWidth: "100px" } },
        { field: "village", header: "Village", style: { minWidth: "100px" } },
    ]

    return (
        <div className="p-4">
            {/* Filter Panel */}
            <div className="bg-white rounded-[15px] mb-4 px-5 py-5">
                {/* Filter Header */}
                <div className="flex items-center gap-2 mb-3">
                    <img src={filterIcon} alt="filter" className="w-4 h-4 object-contain" />
                    <span className="text-[#005B30] text-sm font-semibold">Filter</span>
                </div>

                <hr className="border border-[#005B301A] mb-4 mt-4" />

                {/* Filter Row */}
                <div className="flex flex-wrap items-end gap-4">
                    {/* Name Dropdown */}
                    <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <Dropdown
                            value={selectedName}
                            options={nameOptions}
                            onChange={(e) => setSelectedName(e.value)}
                            placeholder="Select"
                            className="w-full md:w-14rem rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>

                    {/* Designation Dropdown */}
                    <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
                        <label className="text-sm font-medium text-gray-700">Designation</label>
                        <Dropdown
                            value={selectedDesignation}
                            options={designationOptions}
                            onChange={(e) => setSelectedDesignation(e.value)}
                            placeholder="Select"
                            className="w-full md:w-14rem rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>

                    {/* Filter Button */}
                    <button className="flex items-center gap-2 bg-[#005B30] hover:bg-[#004825] text-white text-sm font-medium px-5 py-[9px] rounded-[8px] transition-colors cursor-pointer">
                        <img src={searchIcon} alt="search" className="w-4 h-4 object-contain" />
                        Filter
                    </button>

                    {/* Remove Button */}
                    <button
                        onClick={() => { setSelectedName(null); setSelectedDesignation(null) }}
                        className="flex items-center gap-2 bg-[#FFE4E4] hover:bg-[#ffd0d0] text-[#E53935] text-sm font-medium px-5 py-[9px] rounded-[8px] transition-colors cursor-pointer"
                    >
                        Remove
                    </button>
                </div>
            </div>

            {/* Add New User Button */}
            <div className='flex justify-end mb-3'>
                <button className='bg-[#005B30] hover:bg-[#004825] text-white text-sm font-medium px-4 py-2 rounded-[10px] transition-colors cursor-pointer'>
                    Add New User
                </button>
            </div>

            {/* Table */}
            <div className='bg-white rounded-[15px]'>
                <CustomTable
                    data={data}
                    columns={columns}
                    rowsPerPage={10}
                    showPagination={true}
                    scrollable={false}
                    addBtnShow={true}
                    leftHeading={'Employee'}
                    addButton={"Add User"}
                    tabsShow={true}
                />
            </div>
        </div>
    )
}
