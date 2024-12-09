'use client'

import { signOut } from 'next-auth/react'
import { Button } from './button'
import { useState } from "react"

export default function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSignOut = async () => {
    setIsSigningOut(true)
    setErrorMessage("")
    try {
     const result =  await signOut({ redirect: true, callbackUrl: '/login' ,json:true})
     if(result.error) throw new Error(result.error);
     
    } catch (error) {
      console.error("Error signing out:", error)
      setErrorMessage("Failed to sign out. Please try again")
      setIsSigningOut(false)
    }
  }

  return (
    <div >
    <Button
      onClick={handleSignOut}
      disabled={isSigningOut}
      
    >
      {isSigningOut ? 'Signing out...' : 'Sign out'}
    </Button>
{errorMessage && (<p className='text-red-500 text-sm'>{errorMessage}</p>)}
    </div>
  )
}