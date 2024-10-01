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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { LocaleSwitch } from "./locale-switch";
import { CollapsibleNavLink } from "./nav-link-collapsible";
import { Button } from "./ui/button";

export function SiteHeader() {
	return (
		<div className="fixed top-8 inset-x-4 md:inset-x-28 px-4 border rounded-3xl z-50 bg-background/50">
			<div className="flex items-center justify-between">
				<Image src={Logo} alt="logo" className="h-20 w-auto" />

				<nav className="items-center gap-10 [font-weight:_300;] hidden lg:flex">
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

				<div className="hidden lg:block">
					<LocaleSwitch />
				</div>

				<Sheet>
					<SheetTrigger asChild>
						<Button className="lg:hidden rounded-md" variant={"ghost"} size={"icon"}>
							<MenuIcon className="w-8 h-8" />
						</Button>
					</SheetTrigger>
					<SheetContent className="flex flex-col gap-2">
						<NavItem>Home</NavItem>
						<NavItem>About Us</NavItem>

						<CollapsibleNavLink title="Services">
							<NavItem>Security Services</NavItem>
							<NavItem>Services Crowd Management</NavItem>
							<NavItem>Services Valet & Car Parking</NavItem>
							<NavItem>Services Car Wash</NavItem>
						</CollapsibleNavLink>

						<NavItem>Contact Us</NavItem>
						<NavItem>Jobs</NavItem>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}

function NavItem({ children }: { children: React.ReactNode }) {
	return (
		<Link href={"#"} className="hover:ring-1 ring-border px-1.5 py-2 rounded-b-md text-nowrap transition-all">
			{children}
		</Link>
	);
}

export function NavLinks({ className }: { className?: string }) {
	return (
		<nav className={cn("items-center gap-10 [font-weight:_300;] hidden lg:flex", className)}>
			<NavItem>Home</NavItem>
			<NavItem>About Us</NavItem>

			<Popover>
				<PopoverTrigger className="flex items-center gap-1 hover:ring-1 ring-border px-1.5 py-2 rounded-b-md text-nowrap transition-all">
					Services
					<ChevronDown className="w-5 h-5" />
				</PopoverTrigger>
				<PopoverContent className="p-4 rounded-t-none flex flex-col gap-3 md:w-[280px]">
					<NavItem>Security Services</NavItem>
					<NavItem>Services Crowd Management</NavItem>
					<NavItem>Services Valet & Car Parking</NavItem>
					<NavItem>Services Car Wash</NavItem>
				</PopoverContent>
			</Popover>

			<NavItem>Contact Us</NavItem>
			<NavItem>Jobs</NavItem>
		</nav>
	);
}
