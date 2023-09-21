"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInButton() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button 
        type="button"
        
        onClick={() => signOut()}
        className="btn_gold"
        >
            Sign out
        </button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}