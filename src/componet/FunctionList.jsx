import React from 'react'
import '../data'
import Frined from './Frined'
const FunctionList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Frined
            frined={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  )
}

export default FunctionList
