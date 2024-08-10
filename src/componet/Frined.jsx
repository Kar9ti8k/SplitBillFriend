import React from 'react'
import Button from './Button'

const Frined = ({ frined, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === frined.id
  return (
    <div>
      <li className={isSelected ? 'selected' : ''}>
        <img src={frined.image} alt={frined.name} />
        <h3>{frined.name}</h3>

        {frined.balance < 0 && (
          <p className='red'>
            You own {frined.name} {Math.abs(frined.balance)}$
          </p>
        )}
        {frined.balance > 0 && (
          <p className='green'>
            You own {frined.name} {Math.abs(frined.balance)}$
          </p>
        )}

        {frined.balance === 0 && (
          <p>
            You own {frined.name} {Math.abs(frined.balance)}$
          </p>
        )}
        <Button onClick={() => onSelection(frined)}>
          {isSelected ? 'Close' : 'Select'}
        </Button>
      </li>
    </div>
  )
}

export default Frined
