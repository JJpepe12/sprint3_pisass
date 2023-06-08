import React from 'react'
import SearchIcon from '../../assets/icons/search.svg'

const SearchBar = () => {
  return (
    <>
      <h6>El Header va aquí</h6>
      <section>
      <form class="search-bar">
        <input type="text" placeholder="Estoy buscando..." name="" id="" />
        <div class="actions">
          <button type="submit">
            <span class="material-icons-outlined">search</span>
          </button>
        </div>
      </form>
        <figure>
          <img src={SearchIcon} alt="Search Icon" />
        </figure>
      </section>
      <h6>El Footer va aquí</h6>
    </>
  )
}

export default SearchBar