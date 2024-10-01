import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, WhatsappIcon } from "@/components/ui/icons";
import AvnLogo from "@/public/avn-logo.png";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./site-header";
import FooterImage from "@/public/footer.png";

const socialMedia = [
	{ name: "Facebook", href: "#", Icon: FacebookIcon },
	{ name: "Instagram", href: "#", Icon: InstagramIcon },
	{ name: "Twitter", href: "#", Icon: TwitterIcon },
	{ name: "LinkedIn", href: "#", Icon: LinkedInIcon },
	{ name: "Whatsapp", href: "#", Icon: WhatsappIcon },
];

export function SiteFooter() {
	return (
		<div>
			<Image src={FooterImage} alt="footer" className="w-full object-cover h-[400px]" />
			<div className="mx-4 md:mx-28 px-4 mt-8">
				<NavLinks className="flex flex-col gap-4 items-start md:hidden" />

				<div className="flex flex-row-reverse md:flex-row items-center justify-between">
					<Image src={Logo} alt="logo" className="h-20 w-auto" />

					<NavLinks />

					<div className="flex items-center gap-4">
						{socialMedia.map((item) => (
							<Link href={item.href} key={item.name} className="bg-[#001C51] p-2 rounded-md hover:opacity-80">
								<item.Icon className="h-5 w-5" />
							</Link>
						))}
					</div>
				</div>

				<div className="flex items-center justify-center text-sm md:text-base">
					<a href="mailto:info@avnology.com">Ⓒ Designed by</a>
					<Image src={AvnLogo} alt="Avnology" width={72} height={18} className="h-20" />
					<a href="mailto:info@avnology.com">ALL RIGHTS RESERVED</a>
				</div>
			</div>
		</div>
	);
}
