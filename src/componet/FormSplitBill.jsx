import React, { useState } from 'react'
import Button from './Button'

export const FormSplitBill = ({ selectedFriend, onSplit }) => {
  const [bill, setBill] = useState('')
  const [payByUser, setPayByUser] = useState('')
  const paid = bill ? bill - payByUser : ''
  const [whoIsPay, setWhoIsPay] = useState('user')
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bill || !payByUser) return
    onSplit(whoIsPay === 'user' ? paid : -payByUser)
  }
  return (
    <div>
      <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>form-split-bill{selectedFriend.name}</h2>
        <label htmlFor=''>Bill value</label>
        <input
          type='text'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <label htmlFor=''>Your expance</label>

        <input
          type='text'
          value={payByUser}
          onChange={(e) =>
            setPayByUser(
              Number(e.target.value) > bill ? payByUser : Number(e.target.value)
            )
          }
        />
        <label>{selectedFriend.name} Expance</label>
        <input type='text' disabled value={paid} />
        <label>Who is paying the bill</label>
        <select value={whoIsPay} onChange={(e) => setWhoIsPay(e.target.value)}>
          <option value='user'>You</option>
          <option value='friend'>{selectedFriend.name}</option>
        </select>
        <Button>Split jpbill</Button>
        <h2>llll</h2>
      </form>
    </div>
  )
}
