"use client";
import Link from 'next/link';
import Image from 'next/image';
import TarotLogo from '../public/icons/tarot_logo.svg';
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
    <nav className='flex justify-between w-full bg-white-s'>
        <div className='p-3 pl-5'>
            <Link href="/" className='group flex gap-2 flex-center items-center bg-black border border-black hover:bg-white-s rounded-full'>
                <TarotLogo 
                width={50}
                height={50}
                className='stroke-white-s fill-white-s group-hover:stroke-black group-hover:fill-black pl-1'
                />
                <h1 className='font-mono text-lg text-white-s group-hover:text-black pr-3'>Totally Tarot</h1>
                {/* <Image 
                    src='/icons/tarot_logo_white.png'
                    alt='Totally Tarot logo'
                    priority={true}
                    width={50}
                    height={50}
                    className='rounded-full object-contain'
                /> */}
            </Link>
        </div>
        {/* Desktop Navigation */}
        <div className='p-3 pr-5'>
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