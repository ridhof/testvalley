"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import type { bannerData } from "@/data/banner";

interface BannerProps {
	data: bannerData[],
}

function Banner({ data }: BannerProps) {
	const banners: ({imageUrl: string} & bannerData)[] = data.map((row) => {
		if (typeof window !== "undefined" && window.innerWidth <= 1024) {
			return { imageUrl: row.mobileImageUrl, ...row };
		} else {
			return { imageUrl: row.pcImageUrl, ...row };
		}
	});

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (index + 1 < banners.length) {
				setIndex(index + 1);
			} else {
				setIndex(0);
			}
		}, 8 * 1000);
	}, [index, banners]);

	if (data.length <= 0) {
		return
	}

	let transformClassname = {transform: `translate(calc(${index} * -62rem), 0rem)`};
	if (typeof window !== "undefined" && window.innerWidth < 1024) {
		transformClassname = {transform: `translate(calc(${index} * -24rem), 0rem)`};
	}

	return (
		<div
			className="overflow-hidden lg:pt-[4.4rem] h-[13rem] lg:h-[24rem] flex lg:gap-x-8 bg-white mx-auto max-w-sm lg:max-w-none"
		>
			<div
				className="lg:min-w-[10rem]"
			>
			</div>
			{
				banners.map(
					(banner) => <Image
						key={banner.mainBannerId}
						src={banner.imageUrl}
						alt={banner.title}
						height={80}
						width={960}
						style={transformClassname}
					/>
				)
			}
		</div>
	);
}

export { Banner }
