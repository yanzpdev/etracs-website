'use client';
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Title from "../ui/Title";
import Text from '../ui/Text';
import Image from 'next/image';
import Button from "../ui/Button";
import HorizontalLine from "../ui/HorizontalLine";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';
import LinkBtn from "../ui/LinkBtn";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const handleSignIn = () => {
  signIn('google')
}

const handleSignIn2 = () => {
  signIn('facebook')
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500' ,'700'],
  style: ['normal'],
  display: 'swap',
});

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session != null) {
      router.push('/dashboard');
    }
  }, [router, session]);

  return (
    <>
      <Container name='login' addClasses={`bg-blue-500 xxs:p-5 ${poppins.className}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className='h-full'
        >
          <ContentWrapper className='border drop-shadow-xl rounded-xl w-fit h-fit m-auto border-white bg-white xxs:py-4 py-14  xxs:px-6 px-20 flex flex-col gap-2'>
            <Title text='Sign In to ETRACS' style='font-semibold text-4xl xxs:text-xl xxs:py-1 text-black py-5 text-center' />
            <ContentWrapper className='flex xxs:flex-col xxs:gap-1 w-full gap-6'>
              <ContentWrapper className='flex flex-col gap-6 xxs:gap-2 w-full'>
                <Text text='Login with' style='font-semibold text-center xxs:text-sm xxs:text-start' />
                <Button 
                  btnText='Google' 
                  compName='google' 
                  btnStyle='flex gap-2 px-5 py-2 border rounded-full xxs:text-sm w-full hover:bg-slate-200 duration-500 text-start' 
                  onClick={handleSignIn}
                />
                <Button 
                  btnText='Facebook' 
                  compName='facebook' 
                  btnStyle='flex gap-2 px-5 py-2 border rounded-full xxs:text-sm w-full hover:bg-slate-200 duration-500 text-start' 
                  onClick={handleSignIn2}
                />
                <ContentWrapper className='flex gap-1 items-center xxs:hidden xxs:px-2 px-4' >
                  <FaArrowLeft />
                  <LinkBtn url='/' text='Back to home' btnStyle='text-sm xxs:text-xs hover:underline underline-offset-4' />
                </ContentWrapper>
              </ContentWrapper>
              <Text text='or' style='font-bold'/>
  
              <ContentWrapper className='w-full h-full flex flex-col items-center xxs:hidden' >
                <Image 
                  src='../assets/qrcode.svg' 
                  alt='QR Code'
                  height={300}
                  width={300}
                  className='p-3 drop-shadow-xl border rounded-xl xxs:w-32 xxs:h-32'
                />
                <Text text='Sign in with QR code' style='xxs:text-xs xxs:p-1 font-bold text-center py-2' />
                <Text text='scan with the Filipizen app for secured login.' style='xxs:text-xs xxs:p-1 py-2 font-semibold text-center text-sm' />
                <ContentWrapper className="flex gap-5 justify-center m-4">
                  <Link href='https://play.google.com/store/games?hl=en-PH'>
                    <Image 
                      src='/assets/googleplay.png'
                      alt='Google Play Badge'
                      width={100}
                      height={50}
                    />
                  </Link>
                  
                  <Link href='https://www.apple.com/ph/app-store/'>
                    <Image 
                      src='/assets/appstore.png'
                      alt='Google Play Badge'
                      width={100}
                      height={50}
                    />
                  </Link>
                </ContentWrapper>
              </ContentWrapper>
            </ContentWrapper>
            <HorizontalLine height={'1.5px'} lineStyle='bg-[#334155]'/>
            <Text text='Copyright © 2023 Rameses Systems Inc. All Rights Reserved' style='text-xs text-center' />
          </ContentWrapper>
        </motion.div>
      </Container>
    </>
  )
}

export default Login;