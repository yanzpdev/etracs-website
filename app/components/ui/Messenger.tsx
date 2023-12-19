"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

const Messenger = () => {
  return (
    <FacebookProvider appId="1007286433691486" chatSupport>
      <CustomChat pageId="149178271620427" minimized={true}/>
    </FacebookProvider> 
  )
}

export default Messenger