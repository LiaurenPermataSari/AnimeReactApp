import React from 'react'
import Item from './Item'

const Items = ({anime}) => {
  return (
    <div className='item-list'>
        {anime.map(item => (
            <Item key={item.mal_id} item={item}/>
        ))}
    </div>
  )
}

export default Items;