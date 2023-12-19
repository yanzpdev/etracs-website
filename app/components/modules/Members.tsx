import LayoutComponent from '../layout/LayoutComponent'
import { getMembersData } from '@/app/utils/helpers';

const Members = async () => {
  const membersData = await getMembersData();
  const filteredData = membersData.filter((item: { subtype: string; }) => {
    return item.subtype === 'municipality' || item.subtype === 'city' || item.subtype === 'province';
  });
  const count = filteredData.length

  const classNames = {
    name: 'members',
    titleText: 'Trusted by '+ count +' local governments nationwide and growing', 
    descText: 'Local governments rely on E-TRACS to automate processes that maximize revenue generation such as real property assessment, business licensing, and other permitting systems.', 
    titleStyle: 'text-5xl xxs:text-2xl xs:text-4xl sm:text-6xl font-bold pb-2 text-center', 
    contentWrapperClass: 'my-10 xxs:my-2 flex flex-col',
    descStyle: 'text-2xl xxs:text-base xs:text-2xl sm:text-4xl py-10 xxs:py-2 xs:py-2 text-center', 
    btnText: 'View all members',
    btnStyle: 'flex items-center gap-3 w-fit h-fit xxs:px-5 px-7 xxs:py-3 py-5 font-bold bg-blue-700 text-white rounded-xl 3xl:hover:bg-blue-500 2xl:hover:bg-blue-500 xl:hover:bg-blue-500 lg:hover:bg-blue-500 duration-300 text-xl xxs:text-sm sm:text-4xl md:text-4xl mx-auto'  
  }

  return (
    <LayoutComponent {...classNames} data={filteredData} />
  )
}

export default Members;
