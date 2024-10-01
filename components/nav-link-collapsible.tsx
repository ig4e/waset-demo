"use client";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function CollapsibleNavLink({ title, children }: { title: string; children: React.ReactNode }) {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible open={open} onOpenChange={setOpen} className="w-full">
			<CollapsibleTrigger className="w-full hover:ring-1 ring-border px-1.5 py-2 rounded-b-md text-nowrap transition-all flex justify-between ">
				<span>{title}</span>
				<ChevronDownIcon
					className={cn("w-5 h-5 transition", {
						"rotate-180": open,
					})}
				/>
			</CollapsibleTrigger>
			<CollapsibleContent className="CollapsibleContent">
				<div className="p-2 flex flex-col gap-1">{children}</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
