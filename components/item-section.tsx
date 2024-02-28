"use client"

import { useEffect, useState } from "react";

import { Item } from "@/components/item"
import type { collectionData, itemData } from "@/data/collection";

interface ItemSectionProps {
	data: collectionData,
}

function ItemSection({data}: ItemSectionProps) {
	const [items, setItems] = useState<itemData[]>(data.items);
	const [isManual, setManual] = useState(false);

	function shiftItemOrderReverse() {
		const copy = items.slice();
		const popped = copy.pop();
		if (popped) {
			copy.unshift(popped);
			setItems(copy);
			setManual(true);
		}
	}

	function shiftItemOrder() {
		if (items[0].seq < items.length - 4) {
			const copy = items.slice();
			copy.reverse();
			const popped = copy.pop();
			if (popped) {
				copy.unshift(popped);
				copy.reverse();
				setItems(copy);
				setManual(true);
			}
		}
	}

	useEffect(() => {
		if (window && window.innerWidth < 1024) {
			return
		}
		if (!isManual) {
			setTimeout(() => {
				if (items[0].seq < items.length - 4) {
					const copy = items.slice();
					copy.reverse();
					const popped = copy.pop();
					if (popped) {
						copy.unshift(popped);
						copy.reverse();
						setItems(copy);
					}
				} else {
					const copy = items.slice();
					copy.reverse();
					for (let i = 0; i < 4; i++) {
						let popped = copy.pop();
						if (popped) {
							copy.unshift(popped);
						}
					}
					copy.reverse();
					setItems(copy);
				}
			}, 8 * 1000);
		} else {
			setTimeout(() => {
				setManual(false);
			}, 8 * 1000);
		}
	}, [items, isManual]);

	return (
		<div className="px-[1.2rem] w-full flex flex-col lg:flex-row gap-y-[1rem]">
			<div className="w-[15.2rem] flex flex-col justify-between">
				<div className="flex flex-col gap-y-[0.6rem]">
					<p className="text-xl font-bold">
						{data.title}
					</p>
					<p className="text-xs text-gray-500">
						{data.subtitle}
					</p>
				</div>
				<div className="hidden lg:flex gap-x-[1rem]">
					<button
						onClick={shiftItemOrderReverse}
						disabled={items[0].seq === 0}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-5 h-5 ${items[0].seq === 0 ? 'text-gray-400' : 'text-gray-600'}`}
						>
						  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
					</button>
					<button
						onClick={shiftItemOrder}
						disabled={items[0].seq === items.length - 1}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-5 h-5 ${items[0].seq === items.length - 1 ? 'text-gray-400' : 'text-gray-600'}`}
						>
						  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:flex lg:gap-x-[0.6rem] gap-y-[0.6rem]">
				{
					items.map(
						(row, index) => <Item
							key={row.uuid}
							data={row}
							className={index > 3 ? 'lg:hidden' : ''}
						/>
					)
				}
			</div>
		</div>
	);
}

export { ItemSection }
