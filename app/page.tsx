import { Banner } from "@/components/banner";
import { BottomMenu } from "@/components/bottom-menu";
import { Categories } from "@/components/categories";
import { ItemSection } from "@/components/item-section";
import { Navigation } from "@/components/navigation";
import { getBannerData } from "@/data/banner";
import { getCollectionData } from "@/data/collection";
import { getShortcutData } from "@/data/shortcut";

export default async function Home() {
	const bannerPromise = getBannerData();
	const collectionPromise = getCollectionData();
	const shortcutPromise = getShortcutData();
	const [
		bannerResponseData,
		collectionResponseData,
		shortcutResponseData,
	] = await Promise.all([
		bannerPromise, collectionPromise, shortcutPromise
	]);
	const collectionData = collectionResponseData.items.filter(
		(row) => row.type === "SINGLE" && 
			row.viewType === "TILE"
	);

	const itemSections = collectionData.map(
		(row) => <ItemSection key={row.id} data={row} />
	);
	return (
		<main
			className="min-h-screen static"
		>
			<Navigation />
			<BottomMenu />
			<Banner data={bannerResponseData} />
			<div
				className="bg-white max-w-[24rem] lg:max-w-[60rem] mx-auto flex flex-col gap-y-[4.4rem] items-center justify-between py-[1rem] lg:py-[4.4rem]"
			>
				<Categories data={shortcutResponseData} />
				{itemSections}
			</div>
		</main>
	);
}
