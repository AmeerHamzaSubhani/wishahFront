'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainIcon from "@/assets/mainIcon";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import SideImg from "@/assets/svgs/sideImg.svg";
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from "sonner"
import Loader from '@/components/customComponents/loader';
function Page() {
  const router = useRouter();

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!email || !password) {
        setError('Please fill in all fields');
        return;
    }
    setIsLoading(true)
    try {
        const response = await axios.post(`http://localhost:8000/auth/login`, { email, password });
        console.log('response===>', response);
        console.log('response.data===>', true);  
        
        if (response?.status === 201) {
            const token = response.data.access_token.access_token
            const refreshToken = response.data.access_token.refresh_token
            const isAdmin = response.data.data.isAdmin
            Cookies.set('access_token', token)
            Cookies.set('refresh_token', refreshToken)
            Cookies.set('isAdmin', isAdmin)
            toast("Success", {
              description: "Login Successful",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
              setTimeout(() => {
            setIsLoading(false)
                if(token && refreshToken){
                  router.push('/dashboard');
                }
              },2000)

        } else {
          setIsLoading(false)
            setError('Invalid email or password'); 
        }
    } catch (error) {
        console.error('Login error:', error);
        if (error) {
            // setError(error);
            setIsLoading(false)

        } else {
            setError('An error occurred. Please try again later.');
            setIsLoading(false)

        }
    }
};

  return (
    <div className='flex w-full'>
      <div className="hidden sm:flex w-[50%]">
        <div className="relative w-full h-screen">
          <Image 
            src={SideImg} 
            alt="wishah sideImg" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <div className="absolute hidden sm:flex w-1/2 h-screen bg-cover"> 
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-[50%] h-screen bg-[#F05F97] items-center justify-center space-y-10">
      {isLoading && (<Loader/>)}
        <div className="div">
          <MainIcon   heightOfIcon={'181px'} widthOfIcon={'228px'}/>
        </div>
        <div className="flex w-[414px] items-center justify-center">
          <h3 className='text-2xl sm:text-4xl text-white font-bold'>
            Welcome to SPA CMS
          </h3>
        </div>
        {error && (
          <div className="text-[#FF0A0A] text-center">{error}</div>
        )}
        <div className="space-y-5">
          <div className="flex justify-center items-center z-20">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className=' bg-white font-semibold w-[300px] md:w-[350px] lg:w-[500px] xl:w-[618px] h-[70px] rounded-xl p-x-10 shadow-md shadow-black'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="flex justify-center items-center z-20">
            <Input 
              type="password" 
              placeholder="Password" 
              className='flex bg-white font-semibold w-[300px] md:w-[350px] lg:w-[500px] xl:w-[618px] h-[70px] rounded-xl p-x-10 shadow-md shadow-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
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
            <Button className='w-[250px] md:w-[350px] bg-[#8BC152] font-semibold hover:bg-[#80c239]' onClick={handleLogin}>
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
