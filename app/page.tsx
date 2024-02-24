import { Banner } from "@/components/banner";
import { Navigation } from "@/components/navigation";
import { getBannerData } from "@/data/banner";

export default async function Home() {
	const bannerResponseData = await getBannerData();
	return (
		<main
			className="min-h-screen"
		>
			<Navigation />
			<Banner data={bannerResponseData} />
			<div
				className="flex flex-col items-center justify-between p-24"
			>
			</div>
		</main>
	);
}
