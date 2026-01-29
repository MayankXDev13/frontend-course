import { createUser } from '@/actions'
import React from 'react'
import { useFormState } from 'react-dom'

function Form() {
    const[state, fromAction] = useFormState(createUser, {})


  return (
    <form action={fromAction}>
      <input type="email" name="email" placeholder="user@example.com" />
      <button type="submit" className="bg-blue-500">Create User</button>
      {state.error && <p>{state.error}</p>}
    </form>
  )
}

export default Form