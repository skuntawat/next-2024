export const metadata = {
	title: "Music App",
	description: "shadcn ui template",
};

export default function Layout({ children }) {
	return (
		<div className="bg-background">
			{children}
		</div>
	);
}
