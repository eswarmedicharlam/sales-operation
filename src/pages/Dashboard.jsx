import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import activeUser from '../assets/images/activeUser.png';
import distanceIcon from '../assets/images/distanceIcon.png';
import usersIcon from '../assets/images/usersIcon.png';
import visitIcon from '../assets/images/visitIcon.png';

export const Dashboard = () => {
    // Dummy Data for Line Chart
    const visitTrendsData = [
        { name: 'Mon', visits: 400 },
        { name: 'Tue', visits: 420 },
        { name: 'Wed', visits: 260 },
        { name: 'Thu', visits: 370 },
        { name: 'Fri', visits: 385 },
        { name: 'Sat', visits: 380 },
        { name: 'Sun', visits: 420 },
    ];

    // Dummy Data for Pie Chart
    const pieData = [
        { name: 'Dealers', value: 40, color: '#005B30' },
        { name: 'Farmers', value: 30, color: '#5D5FEF' },
        { name: 'Village Mapping', value: 20, color: '#9232EA' },
        { name: 'Others', value: 10, color: '#D97604' },
    ];

    const daysData = [
        { label: 'Today', value: 'Today' },
        { label: 'This Week', value: 'This Week' },
        { label: 'This Month', value: 'This Month' },
        { label: 'This Year', value: 'This Year' },
    ]

    const cardData = [
        { title: 'Total Field Users', value: '250', icon: usersIcon, bgColor: '#5D5FEF1A' },
        { title: 'Active Users Today', value: '220', icon: activeUser, bgColor: '#E8FFF4' },
        { title: 'Total Visits Today', value: '560', icon: visitIcon, bgColor: '#FAF5FF' },
        { title: 'Total Distance (KM)', value: '3500', icon: distanceIcon, bgColor: '#FFFBEB' },
    ]

    const weekMonth = [{ label: 'Week', value: 'Week' }, { label: 'Month', value: 'Month' }] 

    return (
        <div className="p-4 sm:p-6 bg-[#f5f9f7] min-h-screen font-sans">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold text-[#1E293B]">Dashboard</h1>
                <div className="flex items-center gap-3">
                    <Dropdown
                        value="Today"
                        options={daysData}
                        className="w-[120px] bg-white border border-gray-200 rounded-[8px] text-sm h-[38px] flex items-center px-2"
                        panelClassName="text-sm"
                    />
                    <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-[9px] rounded-[8px] transition-colors h-[38px]">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Export
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {
                    cardData.map((cards, indx) => {
                        return (
                            <div className="bg-white p-3 rounded-[15px] border-2 border-[#5D5FEF1A] shadow-sm flex flex-col justify-between h-[140px]">
                                <div style={{ backgroundColor: cards.bgColor }} className={`w-10 h-10 rounded-[10px]  ${cards.bgColor} flex items-center justify-center mb-2`}>
                                    <img src={cards.icon} alt={`${cards.title} icon`} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#1E293B]">{cards.value}</h2>
                                    <p className="text-xs text-gray-500 font-medium mt-1">{cards.title}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-[15px] shadow-sm col-span-1 flex flex-col">
                    <h3 className="text-[16px] font-medium text-[#000000] mb-6">Visits Type Distribution</h3>
                    <div className="relative flex-1 min-h-[220px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-[47.15px] font-semibold text-[#5D5FEF] leading-none">520</span>
                            <span className="text-[13px] text-[#000000] font-normal mt-1">Total Visits</span>
                        </div>
                    </div>
                    {/* Legend */}
                    <div className="mt-6 flex flex-col gap-4">
                        {pieData.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-sm font-medium text-[#1E293B]">{item.name}</span>
                                </div>
                                <span className="text-sm font-semibold text-[#1E293B]">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Area Chart */}
                <div className="bg-white p-6 rounded-[15px] shadow-sm col-span-1 lg:col-span-2 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-[16px] font-medium text-[#000000]">Daily Visit Trends</h3>
                            <p className="text-xs text-gray-500 mt-1">Visit volume over the last 7 days</p>
                        </div>
                        <Dropdown
                            value="Week"
                            options={weekMonth}
                            className="w-[120px] bg-white border rounded-[8px] text-xs h-[34px] flex items-center px-2"
                            panelClassName="text-sm"
                        />
                    </div>
                    <div className="w-full h-[300px] min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={visitTrendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#005B30" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#005B30" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fontSize: 12, fill: '#1E293B', fontWeight: 600 }}
                                    dy={10}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fontSize: 12, fill: '#64748B' }}
                                    ticks={[0, 100, 200, 300, 400, 500]}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="visits"
                                    stroke="#005B30"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorVisits)"
                                    activeDot={{ r: 6, fill: '#005B30', stroke: '#fff', strokeWidth: 2 }}
                                    dot={{ r: 4, fill: '#005B30', strokeWidth: 0 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};