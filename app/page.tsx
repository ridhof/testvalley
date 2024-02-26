import { Banner } from "@/components/banner";
import { Categories } from "@/components/categories";
import { Navigation } from "@/components/navigation";
import { getBannerData } from "@/data/banner";
import { getShortcutData } from "@/data/shortcut";

export default async function Home() {
	const bannerPromise = getBannerData();
	const shortcutPromise = getShortcutData();
	const [bannerResponseData, shortcutResponseData] = await Promise.all([
		bannerPromise, shortcutPromise
	]);
	return (
		<main
			className="min-h-screen"
		>
			<Navigation />
			<Banner data={bannerResponseData} />
			<div
				className="max-w-[24rem] lg:max-w-[60rem] mx-auto flex flex-col items-center justify-between py-[1rem] lg:py-[4.4rem]"
			>
				<Categories data={shortcutResponseData} />
			</div>
		</main>
	);
}
