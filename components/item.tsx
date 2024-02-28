import Image from "next/image";

import type { itemData } from "@/data/collection";
import DeliveryIcon from "@/icons/delivery.png";
import ReturnIcon from "@/icons/return.svg";

interface ItemProps {
	data: itemData,
	className?: string,
}

function Item({data, className}: ItemProps) {
	const descriptionTags = data.publication.tagsOnDesc.map(
		(row) => <p 
			key={row}
			className="bg-gray-200 text-xs w-auto p-[0.1rem]"
		>
			{row}
		</p>
	);
	const imageTags = data.publication.tagsOnImage.map(
		(row) => <div
			key={row}
			className="p-[0.2rem] flex bg-[#009E8A] gap-x-[0.1rem]"
		>
			<Image
				src={ReturnIcon}
				alt="return icon"
				height={12}
				width={12}
			/>
			<p className="text-xs text-white">
				{row}
			</p>
		</div>
	);
	return (
 		<div
			className={[
				"w-[10.4rem] flex flex-col gap-y-[0.4rem]",
				className,
			].join(" ")}
		>
			<div className="relative">
				<Image
					src={data.publication.media[0].uri}
					alt={data.publication.title}
					className="rounded"
					height={200}
					width={200}
				/>
				<div className="absolute bottom-[0.4rem] flex gap-x-[0.1rem]">
					{imageTags}
				</div>
			</div>
			<p className="text-sm line-clamp-2 h-[2.6rem]">
				{data.publication.title}
			</p>
			<p className="font-medium">
				<span className="text-[#FF5023]">
					{data.publication.priceInfo.discountRate && `${data.publication.priceInfo.discountRate}%`}
				</span>
				{
					(data.publication.priceInfo.discountPrice || data.publication.priceInfo.price).toLocaleString('kr-KR')
				}
				<span className="text-xs">원</span>
			</p>
			<div className="flex">
				{descriptionTags}
			</div>
			<div className="flex gap-x-[0.1rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-3 h-3 text-gray-700 my-auto"
				>
				  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
				</svg>
				<p className="text-xs">{data.publication.rating}</p>
			</div>
			{
				data.publication.preface && 
				<div
					className="flex gap-x-[0.1rem] border border-[0.1rem] border-gray-300 p-1 w-fit"
				>
					{
						data.publication.prefaceIconUrl && <Image
							src={data.publication.prefaceIconUrl}
							alt={data.publication.preface}
							height={16}
							width={16}
						/>
					}
					<p
						className="text-xs text-gray-600"
					>
						{data.publication.preface}
					</p>
				</div>
			}
		</div>
	);
}

export { Item }
