import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarMenuItemsProps {
    description: string;
    icon: JSX.Element;
    path: string;
} 

export default function SidebarMenuItem({icon, description, path}:SidebarMenuItemsProps) {
  const currentPath = usePathname()
  return (
    <Link href={path}>
        <div className={`text-lg font-semibold mb-2 hover:bg-gray-100 hover:shadow-md hover:border-r-8 hover:border-green-600 transition-all duration-300 ease-in-out px-5 py-3 w-full flex items-center 
        ${currentPath === path ? 'bg-gray-100 border-r-8 border-green-700' : ''}`}>
            {icon} {description}
        </div>
    </Link>

  );
}