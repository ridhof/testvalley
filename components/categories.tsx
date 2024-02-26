import Image from "next/image";
import Link from "next/link";

import type { shortcutData } from "@/data/shortcut";

interface CategoriesProps {
	data: shortcutData[],
}

function Categories({ data }: CategoriesProps) {
	const categories = data.map(({
		mainShortcutId,
		title,
		imageUrl,
		linkUrl,
	}) => {
		return (
			<Link key={mainShortcutId} href={linkUrl}>
				<Image
					src={imageUrl}
					width={60}
					height={60}
					className="w-[3rem] lg:w-[4rem] mx-auto"
				/>
				<p className="mt-[2rem] text-xs text-center">
					{title}
				</p>
			</Link>
		);
	});
	return (
		<div className="grid gap-x-[0.8rem] gap-y-[1.6rem] lg:gap-x-[2.1rem] grid-cols-5 lg:grid-cols-10">
			{categories}
		</div>
	);
}

export { Categories }
