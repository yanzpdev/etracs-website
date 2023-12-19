'use client';
import { useEffect } from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Button from '../components/ui/Button';
import Text from '../components/ui/Text';

const Dashboard = () => {
  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'authenticated') {
    return (
      <div>
        <Text text={session.user?.name ?? ''} style='font-bold' />
        <Button compName='' btnStyle='' btnText='Log out' onClick={signOut} />
      </div>
    )
  }
}

export default Dashboard