import React, {useState} from 'react'

export default function SearchBox(props){
    const [search, setSearch] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`search/name/${search}`);
    }
    return(
        <form clasName="form" onsubmit={submitHandler}>
            <div className='row'>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit" className='primary'>
                <i className='fa fa-search'></i>
            </button>
            </div>
        </form>
    )
}