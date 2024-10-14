'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainIcon from "@/assets/mainIcon";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import SideImg from "@/assets/svgs/sideImg.svg";

function Page() {
  const router = useRouter();

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // You can add more complex validations here if needed

    // If validation passes, navigate to another page (for example, '/dashboard')
    router.push('/dashboard'); // Adjust the route as needed
  };

  return (
    <div className='flex w-full'>
      <div className="hidden sm:flex w-[50%]">
        <div className="relative w-full h-screen">
          <Image 
            src={SideImg} 
            alt="wishah sideImg" 
            layout="fill" // Use layout fill for the image to cover the div
            objectFit="cover" // Ensures the image covers the div without distortion
          />
        </div>
        <div className="absolute hidden sm:flex w-1/2 h-screen bg-cover"> 
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-[50%] h-screen bg-[#F05F97] items-center justify-center space-y-10">
        <div className="div">
          <MainIcon />
        </div>
        <div className="flex w-[414px] items-center justify-center">
          <h3 className='text-4xl text-white font-bold'>
            Welcome to SPA CMS
          </h3>
        </div>
        {error && (
          <div className="text-[#FF0A0A] text-center">{error}</div>
        )}
        <div className="space-y-5">
          <div className="z-20">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className='bg-white font-semibold w-[618px] h-[70px] rounded-xl p-x-10 shadow-md shadow-black'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
          </div>
          <div className="z-20">
            <Input 
              type="password" 
              placeholder="Password" 
              className='bg-white font-semibold w-[618px] h-[70px] rounded-xl p-x-10 shadow-md shadow-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
            />
          </div>
          <div className="flex justify-between items-center p-x-3">
            <div className="flex justify-center items-center text-white text-xs gap-2 p-2">
              <Checkbox id="remember" className='outline-white' />
              Remember me 
            </div>
            <div className="text-white text-xs">
              Forget Password 
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button className='w-[350px] bg-[#8BC152] font-semibold hover:bg-[#80c239]' onClick={handleLogin}>
              LOGIN
            </Button>
          </div>
          <div className="flex justify-center items-center text-xs text-white">
            Not Registered yet? <span className='text-[#8BC152] text-xs'>Create an account</span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
