import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { CirclePlay, Radio, LayoutGrid, ListMusic, Music2, User, MicVocal, Library  } from "lucide-react"
import { cn } from "@/lib/utils"

const discover = [
	{
		label: "Listen Now",
		icon: CirclePlay
	},
	{
		label: "Browse",
		icon: Radio
	},
	{
		label: "Radio",
		icon: LayoutGrid
	}
]


const library = [
	{
		label: "Playlists",
		icon: ListMusic
	},
	{
		label: "Songs",
		icon: Music2
	},
	{
		label: "Made for You",
		icon: User
	},
	{
		label: "Artists",
		icon: MicVocal
	},
	{
		label: "Albums",
		icon: Library
	}
]


const playlists = [
	"Recently Added",
	"Recently Played",
	"Top Songs",
	"Top Albums",
	"Top Artists",
	"Logic Discography",
	"Bedtime Beats",
	"Feeling Happy",
	"I miss Y2K Pop",
	"Runtober",
	"Mellow Days",
	"Eminem Essentials"
]



export default function Sidebar() {
	return (
		<div className="space-y-4 py-4">
			<div className="px-3 py-2">
				<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
				<div className="space-y-1">
					{discover.map((item, key) => (
						<Button key={key} variant="ghost" 
							className={cn(
								"w-full justify-start",
								{
									"bg-secondary": key == 0
								}
							)}
						>
							<item.icon className="mr-2 h-4 w-4" />{item.label}
						</Button>
					))}
				</div>
			</div>
			<div className="px-3 py-2">
				<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
				<div className="space-y-1">
					{library.map((item, key) => (
						<Button key={key} variant="ghost" className="w-full justify-start">
							<item.icon className="mr-2 h-4 w-4" />{item.label}
						</Button>
					))}
				</div>
			</div>
			<div className="px-3 py-2">
				<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Playlists</h2>
				<ScrollArea className="h-[300px] w-full rounded-md">
					<div className="space-y-1">
						{playlists.map((item, key) => (
							<Button key={key} variant="ghost" className="w-full justify-start">
								<ListMusic className="mr-2 h-4 w-4" />{item}
							</Button>
						))}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
}
