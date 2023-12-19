'use client';
import Container from "../components/layout/Container";
import ContentWrapper from "../components/layout/ContentWrapper";
import Title from "../components/ui/Title";
import Text from '../components/ui/Text';
import Image from 'next/image';
import Button from "../components/ui/Button";
import HorizontalLine from "../components/ui/HorizontalLine";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';
import LinkBtn from "../components/ui/LinkBtn";
import { FaArrowLeft } from "react-icons/fa6";

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
      <Container name='login' addClasses={`bg-blue-500 ${poppins.className}`}>
        <ContentWrapper className='border drop-shadow-xl rounded-xl w-fit h-full m-auto border-white bg-white py-14 px-20 flex flex-col gap-2'>
          <Title text='Sign In to ETRACS' style='font-semibold text-4xl text-black py-5 text-center' />
          <ContentWrapper className='flex w-full gap-6'>
            <ContentWrapper className='flex flex-col gap-6 w-full'>
              <Text text='Login with' style='font-semibold text-center' />
              <Button 
                btnText='Google' 
                compName='google' 
                btnStyle='flex gap-2 px-5 py-2 border rounded-full w-full hover:bg-slate-200 duration-500 text-start' 
                onClick={handleSignIn}
              />
              {/* <Text text='or' style='px-6'/> */}
              <Button 
                btnText='Facebook' 
                compName='facebook' 
                btnStyle='flex gap-2 px-5 py-2 border rounded-full w-full hover:bg-slate-200 duration-500 text-start' 
                onClick={handleSignIn2}
              />
              <ContentWrapper className='flex gap-1 items-center px-4' >
                <FaArrowLeft />
                <LinkBtn url='/' text='Back to home' btnStyle='text-sm hover:underline underline-offset-4' />
              </ContentWrapper>
            </ContentWrapper>
            <Text text='or' style='font-bold'/>

            <ContentWrapper className='w-full h-full flex flex-col items-center' >
              <Image 
                src='../assets/qrcode.svg' 
                alt='QR Code'
                height={300}
                width={300}
                className='p-3 drop-shadow-xl border rounded-xl'
              />
              <Text text='Sign in with QR code' style='font-bold text-center py-2' />
              <Text text='scan with the Filipizen app for secured login.' style='py-2 font-semibold text-center text-sm' />
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
          <HorizontalLine height={'1.5px'}/>
          <Text text='Copyright © 2023 Rameses Systems Inc. All Rights Reserved' style='text-xs text-center' />
        </ContentWrapper>
      </Container>
    </>
  )
}

export default Login;