import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div key={item.mal_id} className='item-card'>
      <img src={item.image_url} alt='image'/>
      <div className='card-desc'>
        <h3>{item.title}</h3>
        <p>Rank : {item.rank}</p>
        <p>Episode : {item.episodes}</p>
      </div>
      <button className='btn btn-card'><Link className='link-btn' to={`/item/${item.mal_id}`}>See More</Link></button>
    </div>
  )
}

export default Item