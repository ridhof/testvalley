import Image from "next/image";

import CategoryIcon from "@/icons/category_gray.svg";
import HomeIcon from "@/icons/home.svg";
import LikeIcon from "@/icons/like.svg";
import MeIcon from "@/icons/me.svg";
import SearchIcon from "@/icons/search.svg";

function BottomMenu() {
	return (
		<div className="bg-white fixed bottom-0 left-0 right-0 h-[4.2rem] z-10 w-full min-w-[20rem] max-w-[24rem] mx-auto grid grid-cols-5 text-xs text-center text-gray-500 rounded-t-3xl lg:hidden">
			<button className="w-full m-auto flex flex-col gap-y-[0.4rem]">
				<Image
					src={HomeIcon}
					alt="home icon"
					width={20}
					height={20}
					className="mx-auto"
				/>
				<p>홈</p>
			</button>
			<button className="w-full m-auto flex flex-col gap-y-[0.4rem]">
				<Image
					src={SearchIcon}
					alt="search icon"
					width={20}
					height={20}
					className="mx-auto"
				/>
				<p>검색</p>
			</button>
			<button className="w-full m-auto flex flex-col gap-y-[0.4rem]">
				<Image
					src={CategoryIcon}
					alt="category icon"
					className="m-auto"
					width={20}
					height={20}
				/>
				<p>카테고리</p>
			</button>
			<button className="w-full m-auto flex flex-col gap-y-[0.4rem]">
				<Image
					src={LikeIcon}
					alt="like icon"
					className="m-auto"
					width={20}
					height={20}
				/>
				<p>좋아요</p>
			</button>
			<button className="w-full m-auto flex flex-col gap-y-[0.4rem]">
				<Image
					src={MeIcon}
					alt="me icon"
					className="m-auto"
					width={20}
					height={20}
				/>
				<p>마이페이지</p>
			</button>
		</div>
	);
}

export { BottomMenu };
