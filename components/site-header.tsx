import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { MenuIcon } from "@/components/ui/icons";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LocaleSwitch } from "./locale-switch";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	return (
		<div className="fixed top-8 inset-x-4 md:inset-x-28 px-4 border rounded-3xl z-30 bg-background/50">
			<div className="flex items-center justify-between">
				<Image src={Logo} alt="logo" className="h-20 w-auto" />

				<nav className="items-center gap-10 [font-weight:_300;] hidden md:flex">
					<NavItem>Home</NavItem>
					<NavItem>About Us</NavItem>

					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent className="p-4 pt-6 flex flex-col gap-3 md:w-[280px]">
									<NavItem>Security Services</NavItem>
									<NavItem>Services Crowd Management</NavItem>
									<NavItem>Services Valet & Car Parking</NavItem>
									<NavItem>Services Car Wash</NavItem>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					<NavItem>Contact Us</NavItem>
					<NavItem>Jobs</NavItem>
				</nav>

				<div className="hidden md:block">
					<LocaleSwitch />
				</div>

				<div className="md:hidden">
					<MenuIcon className="w-8 h-8" />
				</div>
			</div>
		</div>
	);
}

function NavItem({ children }: { children: React.ReactNode }) {
	return (
		<Link href={"#"} className="hover:border hover:px-1.5 hover:py-2 rounded-b-md text-nowrap transition-all">
			{children}
		</Link>
	);
}

export function NavLinks({ className }: { className?: string }) {
	return (
		<nav className={cn("items-center gap-10 [font-weight:_300;] hidden md:flex", className)}>
			<NavItem>Home</NavItem>
			<NavItem>About Us</NavItem>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
						<NavigationMenuContent className="p-4 pt-6 flex flex-col gap-3 md:w-[280px]">
							<NavItem>Security Services</NavItem>
							<NavItem>Services Crowd Management</NavItem>
							<NavItem>Services Valet & Car Parking</NavItem>
							<NavItem>Services Car Wash</NavItem>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<NavItem>Contact Us</NavItem>
			<NavItem>Jobs</NavItem>
		</nav>
	);
}
