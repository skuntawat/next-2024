import Sidebar from "@/app/music/_components/Sidebar";
import MusicContent from "@/app/music/_components/MusicContent";
import PodcastContent from "@/app/music/_components/PodcastContent";

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CirclePlus } from "lucide-react"


export default function Music() {
	return (
		<div className="grid lg:grid-cols-5">
			<div className="pb-12 hidden lg:block">
				<Sidebar />
			</div>
			<div className="col-span-3 lg:col-span-4 lg:border-l">
				<div className="h-full px-4 py-6 lg:px-8">
					<Tabs defaultValue="music" className="h-full space-y-6">
						<div className="space-between flex items-center">
							<TabsList>
								<TabsTrigger value="music">Music</TabsTrigger>
								<TabsTrigger value="podcasts">Podcasts</TabsTrigger>
								<TabsTrigger value="live" disabled>Live</TabsTrigger>
							</TabsList>
							<Button className="ml-auto mr-4">
								<CirclePlus className="mr-2 h-4 w-4" />Add Music
							</Button>
						</div>
						<TabsContent value="music">
							<MusicContent />
						</TabsContent>
						<TabsContent value="podcasts">
							<PodcastContent />
						</TabsContent>
					</Tabs>
				</div>
				
			</div>
		</div>
	);
}
