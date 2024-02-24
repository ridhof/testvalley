import Image from "next/image";

import { NextContent } from "@/components/next-content";
import { NextHeader } from "@/components/next-header";

export default function Home() {
	return (
		<main
			className="flex min-h-screen flex-col items-center justify-between p-24"
		>
			<NextHeader />
			<NextContent />
    	</main>
	);
}
