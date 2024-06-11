
import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row">
        <Sidebar username="Aruna Pasteleria"/>
        <div className="w-full bg-blue-100"> 
            {children}
        </div>
    </div>
  );
}