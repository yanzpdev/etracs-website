import { Metadata } from "next"
import LoginLayout from "../components/layout/LoginLayout"

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Etracs Landing Page',
}

const page = () => {
  return (
    <div>
      <LoginLayout />
    </div>
  )
}

export default page