export function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
	return (
		<section className="relative text-center space-y-16 my-12">
			<div>
				<div className="space-y-2 px-4">
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-normal font-bold">{title}</h1>
					<p>{description}</p>
				</div>

				<div className="absolute -z-10 -top-16 resize overflow-clip h-[280px] w-full">
					<svg viewBox="0 0 1511 786" fill="none">
						<path
							d="M1 786L1.00004 0M1513 40.3077H1M1513 181.385H1M1513 322.462H1M1513 463.538H1M1513 604.615H1M1513 745.692H1M337.42 786L337.42 0M672.58 786L672.58 0M1009 786L1009 0M1345.42 786V0M168.58 786L168.58 0M505 786L505 0M841.42 786L841.42 0M1176.58 786V0M1513 786V0"
							stroke="url(#paint0_linear_1_53)"
							stroke-opacity="0.2"
							stroke-linejoin="round"
						/>
						<defs>
							<linearGradient id="paint0_linear_1_53" x1="757" y1="0" x2="757" y2="786" gradientUnits="userSpaceOnUse">
								<stop stop-color="white" stop-opacity="0" />
								<stop offset="0.505208" stop-color="white" />
								<stop offset="1" stop-color="white" stop-opacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>

			<div>{children}</div>
		</section>
	);
}
