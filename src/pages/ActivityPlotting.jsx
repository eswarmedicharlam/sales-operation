import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import ActivityMap from '../components/ActivityMap/ActivityMap'
import filterIcon from '../assets/images/filterIcon.png'
import searchIcon from '../assets/images/searchIcon.png'

const allActivitiesData = [
    {
        id: 1,
        date: '2024-03-10',
        state: 'Karnataka',
        region: 'South',
        district: 'Bangalore Urban',
        village: 'Whitefield',
        activity: 'Field Visit',
        employee: 'Ravi Kumar',
        status: 'Completed'
    },
    {
        id: 2,
        date: '2024-03-09',
        state: 'Karnataka',
        region: 'South',
        district: 'Bangalore Rural',
        village: 'Kanakapura',
        activity: 'Demo Plot',
        employee: 'Meena Raj',
        status: 'In Progress'
    },
    {
        id: 3,
        date: '2024-03-08',
        state: 'Karnataka',
        region: 'South',
        district: 'Mysore',
        village: 'Hunsur',
        activity: 'Farmer Meeting',
        employee: 'Suresh P',
        status: 'Completed'
    },
    {
        id: 4,
        date: '2024-03-07',
        state: 'Karnataka',
        region: 'Central',
        district: 'Mandya',
        village: 'Pandavapura',
        activity: 'Product Demo',
        employee: 'Anitha S',
        status: 'Pending'
    },
    {
        id: 5,
        date: '2024-03-06',
        state: 'Karnataka',
        region: 'East',
        district: 'Kolar',
        village: 'Kolar Town',
        activity: 'Training Session',
        employee: 'Ravi Kumar',
        status: 'Completed'
    }
]

// Dropdown options
const stateOptions = [
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' }
]

const regionOptions = [
    { label: 'South', value: 'South' },
    { label: 'Central', value: 'Central' },
    { label: 'East', value: 'East' },
    { label: 'West', value: 'West' }
]

const districtOptions = [
    { label: 'Bangalore Urban', value: 'Bangalore Urban' },
    { label: 'Bangalore Rural', value: 'Bangalore Rural' },
    { label: 'Mysore', value: 'Mysore' },
    { label: 'Mandya', value: 'Mandya' },
    { label: 'Kolar', value: 'Kolar' }
]

const villageOptions = [
    { label: 'Whitefield', value: 'Whitefield' },
    { label: 'Kanakapura', value: 'Kanakapura' },
    { label: 'Hunsur', value: 'Hunsur' },
    { label: 'Pandavapura', value: 'Pandavapura' },
    { label: 'Kolar Town', value: 'Kolar Town' }
]

const ActivityPlotting = () => {
    const [selectedState, setSelectedState] = useState(null)
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [selectedVillage, setSelectedVillage] = useState(null)
    const [filteredData, setFilteredData] = useState(allActivitiesData)

    const handleFilter = () => {
        const filtered = allActivitiesData.filter(item => {
            const matchState = !selectedState || item.state === selectedState
            const matchRegion = !selectedRegion || item.region === selectedRegion
            const matchDistrict = !selectedDistrict || item.district === selectedDistrict
            const matchVillage = !selectedVillage || item.village === selectedVillage
            return matchState && matchRegion && matchDistrict && matchVillage
        })
        setFilteredData(filtered)
    }

    const handleRemoveFilter = () => {
        setSelectedState(null)
        setSelectedRegion(null)
        setSelectedDistrict(null)
        setSelectedVillage(null)
        setFilteredData(allActivitiesData)
    }

    return (
        <div>
            <div className="bg-white rounded-[15px] mb-4 px-5 py-5">
                <div className="flex items-center gap-2 mb-3">
                    <img src={filterIcon} alt="filter" className="w-4 h-4 object-contain" />
                    <span className="text-[#005B30] text-sm font-semibold">Filter</span>
                </div>

                <hr className="border border-[#005B301A] mb-4 mt-4" />
                <div className="flex flex-wrap items-end gap-4">
                    <div className="flex flex-col gap-1 flex-1 min-w-45">
                        <label className="text-sm font-medium text-gray-700">State</label>
                        <Dropdown
                            value={selectedState}
                            options={stateOptions}
                            onChange={(e) => setSelectedState(e.value)}
                            placeholder="Select"
                            className="w-full rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-45">
                        <label className="text-sm font-medium text-gray-700">Region</label>
                        <Dropdown
                            value={selectedRegion}
                            options={regionOptions}
                            onChange={(e) => setSelectedRegion(e.value)}
                            placeholder="Select"
                            className="w-full rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-45">
                        <label className="text-sm font-medium text-gray-700">District</label>
                        <Dropdown
                            value={selectedDistrict}
                            options={districtOptions}
                            onChange={(e) => setSelectedDistrict(e.value)}
                            placeholder="Select"
                            className="w-full rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-45">
                        <label className="text-sm font-medium text-gray-700">Village</label>
                        <Dropdown
                            value={selectedVillage}
                            options={villageOptions}
                            onChange={(e) => setSelectedVillage(e.value)}
                            placeholder="Select"
                            className="w-full rounded-md"
                            panelClassName="text-sm"
                        />
                    </div>
                    <button
                        onClick={handleFilter}
                        className="flex items-center gap-2 bg-[#005B30] hover:bg-[#004825] text-white text-sm font-medium px-5 py-2.25 rounded-lg transition-colors cursor-pointer"
                    >
                        <img src={searchIcon} alt="search" className="w-4 h-4 object-contain" />
                        Filter
                    </button>
                    <button
                        onClick={handleRemoveFilter}
                        className="flex items-center gap-2 bg-[#FFE4E4] hover:bg-[#ffd0d0] text-[#E53935] text-sm font-medium px-5 py-2.25 rounded-lg transition-colors cursor-pointer"
                    >
                        Remove
                    </button>
                </div>
            </div>
            <ActivityMap data={filteredData} />
        </div>
    )
}

export default ActivityPlotting