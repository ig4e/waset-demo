import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArIcon, EnIcon } from "@/components/ui/icons";

export function LocaleSwitch() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2">
				<span>EN</span>
				<EnIcon className="h-5 w-auto" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" className="pb-6 pt-10 rounded-b-3xl z-10 me-7 rounded-t-none nav-clip">
				<DropdownMenuItem>
					<EnIcon className="h-6 w-6" />
					<span>English</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<ArIcon className="h-6 w-6" />
					<span>Arabic</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
