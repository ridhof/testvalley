import { Navigation } from "@/components/navigation";
import { NextContent } from "@/components/next-content";
import { NextHeader } from "@/components/next-header";

export default function Home() {
	return (
		<main
			className="min-h-screen"
		>
			<Navigation />
			<div
				className="flex flex-col items-center justify-between p-24"
			>
				<NextContent />
			</div>
		</main>
	);
}
