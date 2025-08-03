import React from 'react'
import gameOfThrones from '../gamesData/gameOfThrones'

const Test = () => {
  return (
    <div>
        <div className='grid grid-cols-4'>
        {gameOfThrones.map((item ,index)=>(
            <div key={index}>
                <img src={item.imageLink}  />
                <h1>{item.characterName}</h1>

            </div>
        ))}

        </div>
    </div>
  )
}

export default Test