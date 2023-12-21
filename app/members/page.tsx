import Container from '../components/layout/Container'
import React from 'react'
import { Raleway } from 'next/font/google';
import Navbar from '../components/ui/Navbar';
import ContentWrapper from '../components/layout/ContentWrapper';
import { Metadata } from 'next';
import { getMembersData } from '../utils/helpers';
import Image from 'next/image';
import Text from '../components/ui/Text';
import { getSession } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Members',
  description: 'ETRACS Members List',
}

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600' ,'700'],
  style: ['normal'],
  display: 'swap',
});

interface Member {
  id: number;
  clusterid: string;
  title: string;
  subtype: string;
  state: string;
}

const members = async ({req, res}: any) => {
  const session = await getSession({req});
  let isSignedIn = ''
  if (!session) {
    isSignedIn = 'false'
  }

  else {
    isSignedIn = 'true'
  }
  const groupedData: Record<string, Member[]> = {};
  const membersData = await getMembersData();
  const filteredData: Member[] = membersData.filter((item: { subtype: string; }) => {
    return item.subtype === 'municipality' || item.subtype === 'city' || item.subtype === 'province';
  });

  filteredData.forEach((item) => {
    const { clusterid, subtype } = item;

    if (!/^(city|municipality|province)$/.test(subtype)) {
      return;
    }

    if (!groupedData[clusterid]) {
      groupedData[clusterid] = [];
    }
    groupedData[clusterid].push(item);
  });

  const clusteridMapping: Record<string, string> = {
    sarangani: 'Sarangani',
    aklan: 'Aklan',
    albay: 'Albay',
    antique: 'Antique',
    bohol: 'Bohol',
    bukidnon: 'Bukidnon',
    camsur: 'Camarines Sur',
    catanduanes: 'Catanduanes',
    cebu: 'Cebu',
    davor: 'Davao Oriental',
    ddn: 'Davao Del Norte',
    ddo: 'Davao De Oro',
    gensan: 'General Santos',
    guimaras: 'Guimaras',
    ilocosnorte: 'Ilocos Norte',
    lanaodelnorte: 'Lanao Del Norte',
    masbate: 'Masbate',
    misoc: 'Misamis Occidental',
    misor: 'Misamis Oriental',
    negocc: 'Negros Occidental',
    negor: 'Negros Oriental',
    nuevaecija: 'Nueva Ecija',
    nuevavizcaya: 'Nueva Vizcaya',
    palawan: 'Palawan',
    quezon: 'Quezon',
    sorsogon: 'Sorsogon',
    surigaodelnorte: 'Surigao Del Norte',
    zamboanga: 'Zamboanga',
    zdn: 'Zamboanga Del Norte'
  };
  
  return (
    <div className={`text-slate-700 ${raleway.className}`}>
      <Navbar isPage={true} compName='members' addClasses='fixed'/>
      <Container name='none' addClasses=''>
        <ContentWrapper className='my-10'>
          <h1 className='text-6xl font-bold'>Members</h1>
          {groupedData ? (
            <ContentWrapper className="px-5 xs:px-0 xxs:px-0">
              <ul>
                {Object.keys(groupedData).map((clusterid) => (
                  <li key={clusterid} className="break-after-auto my-3 w-full">
                    <Text text={clusteridMapping[clusterid] || clusterid} style='2xl:text-4xl text-3xl xs:text-lg xxs:text-base font-bold m-5' />
                    <ul className='grid grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 font-semibold '>
                      {groupedData[clusterid].map((item: any) => (
                        <ContentWrapper className='flex flex-col items-center gap-4 py-5 justify-center text-center' key={`${clusterid}-${item.id}`}>  
                          <li className='m-auto'>
                            <Image
                              src={`https://filipizen.com/resources/${item.id}.png`}
                              width={100}
                              height={100}
                              alt={`lgulogo-${item.id}`}
                              className='select-none w-auto h-auto'
                              priority
                            />
                          </li>
                          <ContentWrapper className=''>
                            <Text text={item.title} style='2xl:text-4xl text-sm xs:text-base xxs:text-sm m-auto w-[120px] h-[50px]' />
                          </ContentWrapper>
                        </ContentWrapper>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </ContentWrapper>
          ) : ''}
        </ContentWrapper>
      </Container>
    </div>
  )
}

export default members