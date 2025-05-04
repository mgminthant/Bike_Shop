import React from 'react'
import { CiSearch } from "react-icons/ci";

const Filter = ({prop}) => {
  return (
    <div className="filter-parent">
      <div className="custom-select">
        <select onChange={(e) => prop.setSelect(e.target.value)}>
          <option value="dis">Sorted by Discount</option>
          <option value="des">Sorted by Price descending</option>
          <option value="asc">Sorted by Price ascending</option>
        </select>
      </div>
      <div className="click-filter">
        <span
          className={`${prop.cls === "all" ? "active" : ""}`}
          onClick={() => prop.setCls("all")}
        >
          All
        </span>
        <span
          className={`${prop.cls === "e-bikes" ? "active" : ""}`}
          onClick={() => prop.setCls("e-bikes")}
        >
          E-bikes
        </span>
        <span
          className={`${prop.cls === "gravelbike" ? "active" : ""}`}
          onClick={() => prop.setCls("gravelbike")}
        >
          Gravel-bikes
        </span>
      </div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search here...."
          onChange={(e) => prop.setSearchTerm(e.target.value)}
        />
        <section className="search">
          <CiSearch />
        </section>
      </div>
    </div>
  )
}

export default Filter;