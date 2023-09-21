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
    <nav className='flex justify-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
                src='assets/images/logo.svg'
                alt='Totally Tarot logo'
                width={180}
                height={110}
                className='object-contain'
            />
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {/* check if user is logged in */}
            {session?.user 
            ? (
                <div>
                    <h1>
                        User logged in
                    </h1>
                </div>

                // <div className='flex gap-3 md:gap-5'>
                //     <Link href='/reading'
                //     className='btn_gold'>
                //         Begin Reading
                //     </Link>
                //     <button onClick={signOut} className='btn_gold'>
                //         Sign Out
                //     </button>
                //     <Link href='/profile'>
                //         <Image
                //             src={session?.user.image}
                //             width={37}
                //             height={37}
                //             className='rounded-full'
                //             alt='profile'
                //         />
                //     </Link>
                // </div>
            ) : (
                <div>
                    console.log({providers})
                    {providers &&
                        Object.values(providers).map((provider, index) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider)}
                                className='btn_gold'
                            >
                                Sign In
                            </button>
                        ))
                    }
                </div>
                // <>
                    // {providers &&
                    //     Object.values(providers).map((provider, index) => (
                    //         <button
                    //             type='button'
                    //             key={provider.name}
                    //             onClick={() => signIn(provider)}
                    //             className='btn_gold'
                    //         >
                    //             Sign In
                    //         </button>
                    //     ))}
                // </>
            )}
        </div>
        {/* Mobile Navigation */}
        {/*         
        <div className='sm:hidden flex relative'>
            // check if user is logged in
            {session?.user ? (
                <div className='flex'>
                    <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => settoggleDropdown((prev) => !prev)} // TODO: dropdown menu
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link 
                                href='/profile'
                                className='dropdown_link'
                                onClick={() => settoggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link 
                                href='/create-prompt'
                                className='create_prompt'
                                onClick={() => settoggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                                type='button'
                                onClick={() => {
                                    settoggleDropdown(false);
                                    signOut();
                                }}
                                className='mt-5 w-full btn_gold'
                                >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider, index) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider)}
                                className='btn_gold'
                            >
                                Sign In
                            </button>
                        ))}
                </>
            )}
        </div> */}
    </nav>
  )
}

export default Nav