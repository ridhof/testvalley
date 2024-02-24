"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import type { bannerData } from "@/data/banner";

interface BannerProps {
	data: bannerData[],
}

function Banner({ data }: BannerProps) {
	const banners: { title: string, imageUrl: string }[] = data.map((row) => {
		if (typeof window !== "undefined" && window.innerWidth <= 1024) {
			return { title: row.title, imageUrl: row.mobileImageUrl };
		} else {
			return { title: row.title, imageUrl: row.pcImageUrl };
		}
	});

	const [bannerIndex, setBannerIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (bannerIndex + 1 < data.length) {
				setBannerIndex(bannerIndex + 1);
			} else {
				setBannerIndex(0);
			}
		}, 8 * 1000);
	}, [bannerIndex]);

	if (data.length <= 0) {
		return
	}

	return (
		<div className="lg:-ml-[50rem] lg:pt-[4.4rem] h-[13rem] lg:h-[24rem] flex gap-x-8 bg-white overflow-hidden mx-auto max-w-sm lg:max-w-none">
			<Image
				src={banners[bannerIndex - 1 < 0 ? data.length - 1 : bannerIndex - 1].imageUrl}
				alt={banners[bannerIndex - 1 < 0 ? data.length - 1 : bannerIndex - 1].title}
				height={80}
				width={960}
			/>
			<Image
				src={banners[bannerIndex].imageUrl}
				alt={banners[bannerIndex].title}
				height={80}
				width={960}
			/>
			<Image
				src={banners[bannerIndex + 1 >= data.length ? 0 : bannerIndex + 1].imageUrl}
				alt={banners[bannerIndex + 1 >= data.length ? 0 : bannerIndex + 1].title}
				height={80}
				width={960}
			/>
		</div>
	);
}

export { Banner }
