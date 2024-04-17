import Link from "next/link";

const Header = () => {
	return (
		<div className="header">
			<Link className="header__home" href="/">Home</Link>
			<div>
				<Link href="/performance">Performance</Link>
				<Link href="/reliability">Reliability</Link>
				<Link href="/scale">Scale</Link>
			</div>
		</div>
	);
};

export default Header;
