import { Metadata } from "next"
import DashboardLayout from "../components/layout/DashboardLayout"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Etracs Landing Page',
}

const page = () => {
  return (
    <div>
      <DashboardLayout />
    </div>
  )
}

export default page