import Image, { StaticImageData } from "next/image";

interface HeroProps {
	imgSrc: StaticImageData;
	alt: string;
	title: string;
}

const Hero = ({ imgSrc, alt, title }: HeroProps) => {
	return (
		<div className="hero">
			<div className="hero__title">{title}</div>
			<Image fill src={imgSrc} alt={alt} />
		</div>
	);
};

export default Hero;
