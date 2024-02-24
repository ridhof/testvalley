import Image from "next/image";
import Link from "next/link";

import BellIcon from "@/icons/bell.svg";
import CategoryIcon from "@/icons/category.svg";
import EventIcon from "@/icons/event.svg";
import SearchIcon from "@/icons/search.svg";
import TestValleyLogo from "@/icons/testvalley.svg";

function Navigation() {
	return (
		<div
			className="z-10 bg-white mx-auto max-w-sm lg:max-w-full lg:fixed lg:left-0 lg:right-0 text-sm py-4 lg:border-b"
		>
			<div className="px-4 mx-auto flex gap-x-3 max-w-5xl w-full items-center justify-between lg:justify-evenly">
				<div className="flex gap-x-3">
					<Image
						src={TestValleyLogo}
						height={28}
					/>
					<button className="hidden lg:flex gap-x-1">
						<Image
							src={CategoryIcon}
							height={14}
						/>
						<span
							className="text-[#00D094] font-bold text-sm my-auto"
						>
							카테고리
						</span>
					</button>
				</div>
				<input
					type="text"
					className="hidden lg:inline flex-1 border border-gray-300 p-2 pl-8 bg-no-repeat rounded-sm max-w-[28vw]"
					placeholder="살까말까 고민된다면 검색해보세요!"
					style={{
						backgroundOrigin: 'padding-box',
						backgroundImage: `url('/search.svg')`,
						backgroundPositionX: '0.5rem',
						backgroundPositionY: '0.5rem',
					}}
				/>
				<div className="hidden lg:flex gap-x-2">
					<Image
						src={EventIcon}
						height={28}
					/>
					<div className="border border-gray-300 h-[16px] my-auto" />
					<Link
						href="/sign-in"
						className="font-bold my-auto"
					>
						로그인 / 회원가입
					</Link>
				</div>
				<div className="flex gap-x-4 lg:hidden">
					<Image
						src={BellIcon}
						height={24}
					/>
					<Image
						src={SearchIcon}
						height={24}
					/>
				</div>
			</div>
		</div>
	);
}

export { Navigation };
