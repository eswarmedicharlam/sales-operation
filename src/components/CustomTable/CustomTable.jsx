
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import "./CustomTable.css";

const CustomTable = ({
  data = [],
  columns = [],
  rowsPerPage = 10,
  showPagination = true,
  scrollable = false,
  scrollHeight = "400px",
  className = "",
  addBtnShow,
  handleAddBtn,
  addButton,
  Buttonicon,
  handleTab,
  tabArray,
  activeTab,
  tabsShow,
  leftHeading,
  onPageChange, // Add onPageChange prop
  totalRecords,
  lazy = false,
}) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [first, setFirst] = useState(0);
  const [globalFilter, setGlobalFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const displayTotal = globalFilter ? filteredData.length : (totalRecords || 0);

  // const displayTotal = lazy
  // ? totalRecords || 0
  // : filteredData.length;

  const onPage = (event) => {
    setFirst(event.first);
    const newPage = Math.floor(event.first / rowsPerPage) + 1; // Calculate the page number
    if (onPageChange) {
      onPageChange(newPage); // Call the parent's onPageChange handler
    }
  };

  const onSort = (e) => {
    setSortField(e.sortField);
    setSortOrder(e.sortOrder);
  };
  //   useEffect(() => {
  //   if (!globalFilter) {
  //     // If no search text, show full data
  //     setFilteredData(data);
  //   } else {
  //     // If searching, apply search to NEW incoming data
  //     const filtered = data.filter((row) =>
  //       Object.values(row).some((val) =>
  //         String(val).toLowerCase().includes(globalFilter.toLowerCase())
  //       )
  //     );
  //     setFilteredData(filtered);
  //   }
  // }, [data]);


  useEffect(() => {
    if (!globalFilter.trim()) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(row =>
        Object.values(row).some(val =>
          String(val).toLowerCase().includes(globalFilter)
        )
      );
      setFilteredData(filtered);
    }
  }, [data, globalFilter]);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const lowerValue = value.toLowerCase();
    setGlobalFilter(lowerValue);

    if (!lowerValue.trim()) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(lowerValue)
      )
    );

    setFilteredData(filtered);
    setFirst(0);
  };
  return (
    <>
      <div
        className={`flex ${tabsShow || leftHeading ? "justify-between" : "justify-end"
          }  p-3`}
      >
        <div>
          {leftHeading && (
            <p className="text-lg text-[20px] font-bold text-[#000000]">
              {leftHeading}
            </p>
          )}
          {/* {tabsShow && (
            <div className="flex mb-6 gap-[30px] justify-between">
              {tabArray.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTab(tab)}
                  className={` border-0 cursor-pointer p-2 border-[#00000033] rounded-[10px] w-[160px] text-sm font-medium ${activeTab === tab
                    ? "bg-[#005B30] text-[#FFFFFF]"
                    : "text-[#000000] bg-[#005B300D]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )} */}
        </div>

        <div>
          <div className="flex">
            <span className="p-input-icon-left ">
              <i className="pi pi-search pl-[10px]" />
              <InputText
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search"
                className="w-full md:w-55 pl-6 border-0 rounded-[10px]"
                style={{ paddingLeft: "35px" }}
              />
            </span>


          </div>
        </div>
      </div>

      <div
        className={`border-l border-r border-gray-200 rounded-[20px] ${className}`}
      >
        <DataTable
          value={filteredData}
          lazy={true}
          scrollable="horizontal"
          scrollHeight="700px"
          tableStyle={{ minWidth: "100%" }}
          className="p-datatable-sm custom-table text-center"
          emptyMessage={<div className="flex justify-center items-center w-full p-4">No Available data</div>}
          paginator={showPagination}

          paginatorTemplate={{
            layout:
              "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            PrevPageLink: (options) => (
              <button
                type="button"
                className={options.className}
                onClick={options.onClick}
                disabled={options.disabled}
              >
                Prev
              </button>
            ),
            NextPageLink: (options) => (
              <button
                type="button"
                className={options.className}
                onClick={options.onClick}
                disabled={options.disabled}
              >
                Next
              </button>
            ),
          }}
          paginatorLeft={
            <span className="text-sm text-gray-600">{`Showing ${first + 1
              } to ${Math.min(
                first + rowsPerPage,
                displayTotal
              )} of ${displayTotal} records`}</span>
          }
          rows={rowsPerPage}
          first={first}
          totalRecords={displayTotal}
          // scrollDirection="horizontal"
          onPage={onPage}
          paginatorClassName="p-paginator-custom flex justify-between items-center px-4"
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={onSort}
        // globalFilter={globalFilter}
        >
          {[
            {
              field: "serialNumber",
              header: "S.No",
              body: (rowData, { rowIndex }) => rowIndex + 1,
              style: { minWidth: "50px" },
              sortable: false,
            },
            ...columns,
          ].map((col, index) => (
            <Column
              key={index}
              field={col.field}
              header={col.header}
              body={col.body || undefined}
              style={col.style || { minWidth: "50px" }}
              headerStyle={{
                backgroundColor: "#fff",
                color: "#444A6D",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 16px",
                borderBottom: "1px solid #005B3014",
                borderTop: "1px solid #005B3014",
                textAlign: "center",
                justifyContent: "center",
              }}
              bodyStyle={{
                padding: "16px  16px",
                fontSize: "14px",
                fontWeight: 400,
                color: "#444A6D",
                borderBottom: "1px solid #005B3014",
                textAlign: "center",
                justifyContent: "center",
              }}
              sortable={col.sortable !== false}
              sortFunction={col.sortFunction || undefined}
            />
          ))}
        </DataTable>
      </div>
    </>
  );
};

export default CustomTable;

