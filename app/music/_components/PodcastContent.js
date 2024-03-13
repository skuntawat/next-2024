import { Separator } from "@/components/ui/separator"
import { Podcast } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PodcastContent() {
	return (
		<div className="mt-2">
			<div className="space-y-1">
				<h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
				<p className="text-sm text-muted-foreground">Your favorite podcasts. Updated daily.</p>
			</div>
			<Separator className="my-4"/>

			<div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
				<div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
					<Podcast className="h-10 w-10 text-muted-foreground" />
					<h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
					<p className="mb-4 mt-2 text-sm text-muted-foreground">You have not added any podcasts. Add one below.</p>
					<Button className="text-xs">Add Podcast</Button>
				</div>
			</div>
		</div>
	);
}

