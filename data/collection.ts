interface collectionData {
	id: number,
	type: string,
	code: string,
	title: string,
	subtitle: string,
	description: string,
	trialPeriod: null,
	installmentPrice: null,
	installmentPeriod: null,
	rating: number,
	startDate: string | null,
	endDate: string | null,
	viewType: string | null,
	createdAt: string,
	items: itemData[],
	media: mediaData[]
	thumbnail: mediaData,
	taggings: taggingData[],
	singleCollections: any[],
}

interface mediaData {
	createdAt: string,
	updatedAt: string,
	deletedAt: string | null,
	uuid: string,
	mimeType: string,
	uri: string,
	fileName: string,
	objectKey: string,
	deviceType: null,
	collectionId: number,
	seq: number,
	itemKey: number,
	type: string,
}

interface itemData {
	createdAt: string,
	updatedAt: string,
	deletedAt: string | null,
	uuid: string,
	name: string,
	body: string | null,
	collectionId: number,
	key: string,
	seq: number,
	entityType: string,
	entityid: number,
	optionKey: string | null,
	publication: {
		id: number,
		title: string,
		code: string,
		productId: number,
		prdType: number,
		detailEntity: string,
		content: string,
		offeringType: string,
		rating: number,
		isExistResidual: boolean,
		isAdult: number,
		preface: string,
		prefaceIconUrl: string,
		productName: string,
		brandName: string,
		media: {
			seq: number,
			type: string,
			uri: string,
			mimeType: string,
			deviceType: string | null,
		}[],
		isTrial: boolean,
		tagsOnImage: string[],
		tagsOnDesc: string[],
		priceInfo: {
			price: number,
			discountPrice: number,
			discountRate: number,
		},
		discounts: {
			id: number,
			name: string | null,
			type: string,
			calcMethod: string,
			value: number,
			activeFrom: string | null,
			activeTo: string | null,
			qty: number,
			remain: any | null,
		}[],
		applyCoupon: boolean,
	},
	prdType: number,
}

interface taggingData {
	createdAt: string,
	updatedAt: string,
	deletedAt: string | null,
	collectionId: number,
	tagId: number,
	isOpen: boolean,
	tag: {
		createdAt: string,
		updatedAt: string,
		deletedAt: string | null,
		id: number,
		code: string,
		name: string,
		description: string | null,
		type: string,
	},
}

interface collectionResponseData {
	items: collectionData[],
	totalCount: number,
}

async function getCollectionData(): Promise<collectionResponseData> {
	const res = await fetch(
		`${process.env.API_BASE_URL}/collections?prearrangedDiscount`,
		{ next: { revalidate: 600 } },
	);
	if (!res.ok) {
		throw new Error('Unable to fetch collection data');
		return {
			items: [],
			totalCount: 0,
		};
	}
	return res.json();
};

export type { collectionData, collectionResponseData, itemData };
export { getCollectionData };
