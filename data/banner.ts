interface bannerData {
	mainBannerId: number,
	title: string,
	sort: number,
	pcImageUrl: string,
	mobileImageUrl: string,
	linkUrl: string,
	startDate: string,
	endDate: string,
	creator: string,
	updater: string,
	deleter: string | null,
	createdAt: string,
	updatedAt: string,
	deletedAt: string | null,
}

async function getBannerData(): Promise<bannerData[]> {
	const res = await fetch(
		`${process.env.API_BASE_URL}/main-banner/all`,
		{ next: { revalidate: 600 } },
	);
	if (!res.ok) {
		throw new Error('Unable to fetch banner data');
		return [];
	}
	return res.json();
};

export type { bannerData };
export { getBannerData };
