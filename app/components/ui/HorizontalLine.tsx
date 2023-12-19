
const HorizontalLine = ({height}: {height: string;}) => {
    return (
      <div>            
          <hr 
              className='w-full xs:hidden xxs:hidden'
              style={{
              background: '#334155',
              color: '#334155',
              borderColor: '#334155',
              height: height,
          }}/>
  
          <hr 
              className='w-full 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'
              style={{
              background: '#334155',
              color: '#334155',
              borderColor: '#334155',
              height: '2.3px',
          }}/>
      </div>
    )
  }
  
  export default HorizontalLine