import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const listen_now = [
	{
		song: "React Rendezvous",
		artist: "Ethan Byte",
		image: "/images/photo-1611348586804-61bf6c080437.jpg"
	},
	{
		song: "Async Awakenings",
		artist: "Nina Netcode",
		image: "/images/photo-1468817814611-b7edf94b5d60.jpg"
	},
	{
		song: "The Art of Reusability",
		artist: "Lena Logic",
		image: "/images/photo-1528143358888-6d3c7f67bd5d.jpg"
	},
	{
		song: "Stateful Symphony",
		artist: "Beth Binary",
		image: "/images/photo-1490300472339-79e4adc6be4a.jpg"
	},
	{
		song: "React Rendezvous",
		artist: "Ethan Byte",
		image: "/images/photo-1611348586804-61bf6c080437.jpg"
	},
	{
		song: "Async Awakenings",
		artist: "Nina Netcode",
		image: "/images/photo-1468817814611-b7edf94b5d60.jpg"
	},
	{
		song: "The Art of Reusability",
		artist: "Lena Logic",
		image: "/images/photo-1528143358888-6d3c7f67bd5d.jpg"
	},
	{
		song: "Stateful Symphony",
		artist: "Beth Binary",
		image: "/images/photo-1490300472339-79e4adc6be4a.jpg"
	}
]

const made_for_you = [
	{
		song: "Thinking Components",
		artist: "Lena Logic",
		image: "/images/photo-1615247001958-f4bc92fa6a4a.jpg"
	},
	{
		song: "Functional Fury",
		artist: "Beth Binary",
		image: "/images/photo-1513745405825-efaf9a49315f.jpg"
	},
	{
		song: "React Rendezvous",
		artist: "Ethan Byte",
		image: "/images/photo-1614113489855-66422ad300a4.jpg"
	},
	{
		song: "Stateful Symphony",
		artist: "Beth Binary",
		image: "/images/photo-1446185250204-f94591f7d702.jpg"
	},
	{
		song: "Async Awakenings",
		artist: "Nina Netcode",
		image: "/images/photo-1468817814611-b7edf94b5d60.jpg"
	},
	{
		song: "The Art of Reusability",
		artist: "Lena Logic",
		image: "/images/photo-1490300472339-79e4adc6be4a.jpg"
	},
	{
		song: "Thinking Components",
		artist: "Lena Logic",
		image: "/images/photo-1615247001958-f4bc92fa6a4a.jpg"
	},
	{
		song: "Functional Fury",
		artist: "Beth Binary",
		image: "/images/photo-1513745405825-efaf9a49315f.jpg"
	},
	{
		song: "React Rendezvous",
		artist: "Ethan Byte",
		image: "/images/photo-1614113489855-66422ad300a4.jpg"
	},
	{
		song: "Stateful Symphony",
		artist: "Beth Binary",
		image: "/images/photo-1446185250204-f94591f7d702.jpg"
	},
	{
		song: "Async Awakenings",
		artist: "Nina Netcode",
		image: "/images/photo-1468817814611-b7edf94b5d60.jpg"
	},
	{
		song: "The Art of Reusability",
		artist: "Lena Logic",
		image: "/images/photo-1490300472339-79e4adc6be4a.jpg"
	},
]

export default function MusicContent() {
	return (
		<div className="mt-2">
			<div className="space-y-1">
				<h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
				<p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
			</div>
			<Separator className="my-4"/>

			<ScrollArea className="w-full whitespace-nowrap rounded-md">
				<div className="flex w-max space-x-4 pb-4">
				{listen_now.map((item, key) => (
					<figure key={key} className="space-y-3 w-[250px]">
						<div className="overflow-hidden rounded-md">
							<Image
								src={item.image}
								alt={item.song}
								className="aspect-[3/4] h-auto w-auto object-cover transition-all duration-300 hover:scale-105"
								width={250}
								height={330}
							/>
						</div>
						<figcaption className="space-y-1 text-sm">
							<h3 className="font-medium leading-none">{item.song}</h3>
							<p className="text-xs text-muted-foreground">{item.artist}</p>
						</figcaption>
					</figure>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>


			<div className="mt-6 space-y-1">
				<h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
				<p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
			</div>
			<Separator className="my-4"/>
			<ScrollArea className="w-full whitespace-nowrap rounded-md">
				<div className="flex w-max space-x-4 pb-4">
				{made_for_you.map((item, key) => (
					<figure key={key} className="space-y-3 w-[150px]">
						<div className="overflow-hidden rounded-md">
							<Image
								src={item.image}
								alt={item.song}
								className="aspect-square h-auto w-auto object-cover transition-all duration-300 hover:scale-105"
								width={150}
								height={150}
							/>
						</div>
						<figcaption className="space-y-1 text-sm">
							<h3 className="font-medium leading-none">{item.song}</h3>
							<p className="text-xs text-muted-foreground">{item.artist}</p>
						</figcaption>
					</figure>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>


		</div>
	);
}