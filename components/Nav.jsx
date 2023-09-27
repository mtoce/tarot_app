"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(false);
    })();
  }, []);

  return (
    <nav className='flex justify-between w-full mb-16 pt-3 bg-gold'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
                src='/images/logo2.svg'
                alt='Totally Tarot logo'
                priority={true}
                width={50}
                height={50}
                className='rounded-full object-contain'
            />
        </Link>
        {/* Desktop Navigation */}
        <div>
            {/* check if user is logged in */}
            {session?.user 
            ? (
                <div className='flex flex-row gap-2'>
                    {/* TODO: setup user profile */}
                    <Link href="/profile" className='flex gap-2 flex-center'>
                        <img 
                            src={session.user.image}
                            className="rounded-full max-w-[100%] max-h-[100%] border-white-s border-2"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <button 
                        type="button"
                        onClick={() => signOut()}
                        className="btn_white-s max-w-[100%] max-h-[100%]"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div>
                    <button 
                        onClick={() => signIn()}
                        className='btn_white-s'
                    >
                        Sign in
                    </button>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Nav