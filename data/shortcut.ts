interface shortcutData {
	mainShortcutId: number,
	title: string,
	sort: number,
	imageUrl: string,
	linkUrl: string,
	creator: string,
	updater: string,
	deleter: string | any,
	createdAt: string,
	updatedAt: string,
	deletedAt: string | any,
}

async function getShortcutData(): Promise<shortcutData[]> {
	const res = await fetch(
		`${process.env.API_BASE_URL}/main-shortcut/all`,
		{ next: { revalidate: 600 } },
	);
	if (!res.ok) {
		throw new Error('Unable to fetch shortcut data');
		return [];
	}
	return res.json();
};

export type { shortcutData };
export { getShortcutData };
