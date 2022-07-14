/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */


import React,{ useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../Misc/Config'


const Home = () => {

  const [input , setInput ] = useState('');
  const [results , setResults ] = useState(null);
  const [searchOption , setSearchOption] = useState('shows');

  const isShowsSearched = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`)
    .then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value)
  }

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if( results && results.length > 0) {
      return results[0].show
        ? results.map(item => 
          <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
          <div key={item.person.id}>{item.person.name}</div>
        ));
        } 

    return null;
  };

  return (
    <MainPageLayout>
      <input 
        type="text" 
        placeholder='search'
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}
      />
      <div>
        
        <label htmlFor='shows-search'>
          Shows
          <input 
            id="shows-search" 
            type='radio' 
            value='shows' 
            checked={isShowsSearched}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor='actors-search'>
          Actors
          <input 
            id="actors-search" 
            type='radio' 
            value='people' 
            checked={!isShowsSearched}
            onChange={onRadioChange}
          />
        </label>

      </div>

      <button 
        type="button" 
        onClick={onSearch}
        >
          Search
      </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home