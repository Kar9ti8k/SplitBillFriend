import { useState } from 'react'
import './App.css'
import FunctionList from './componet/FunctionList'
import FormaddFriend from './componet/FormaddFriend'
import Button from './componet/Button'
import { FormSplitBill } from './componet/FormSplitBill'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]
function App() {
  const [friends, SetFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)
  const handleShowAddFriend = () => {
    setShowAddFriend((e) => !e)
  }
  const handleAddFriend = (friend) => {
    SetFriends((friends) => [...friends, friend])
  }
  const handleSelect = (friend) => {
    // setSelectedFriend(friend)
    setSelectedFriend((cel) => (cel?.id === friend.id ? null : friend))
  }
  const hanldeSplit = (value) => {
    SetFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )
  }
  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FunctionList
            friends={friends}
            onSelection={handleSelect}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormaddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? 'Close' : 'Add Friend'}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplit={hanldeSplit}
          />
        )}
      </div>
    </>
  )
}

export default App
