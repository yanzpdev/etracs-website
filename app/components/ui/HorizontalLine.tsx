const HorizontalLine = ({height, lineStyle}: {height: string, lineStyle: string}) => {
  return (
    <div>            
      <hr 
        className={`w-full xs:hidden xxs:hidden ${lineStyle}`}
        style={{
        height: height,
      }}/>
      <hr 
        className={`w-full 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ${lineStyle}`}
        style={{
        height: '2.3px',
      }}/>
    </div>
  )
}
  
  export default HorizontalLine