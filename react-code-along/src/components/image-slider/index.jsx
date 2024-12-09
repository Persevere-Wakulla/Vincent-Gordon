import { useState, useEffect } from "react";
import "./stylz.css";
export default function ImageSlider({ url, limit = 5 }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchImages(getUrl) {
		try {
			setLoading(true);

			const response = await fetch(`${getUrl}?limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	function handlePrev() {
		setCurrentSlide(currentSlide === 0 ? images.products.length -1 : currentSlide -1);
       console.log(images.products.length);
	}
	function handleNext() {
		setCurrentSlide(currentSlide === images.products.length - 1 ? 0 : currentSlide + 1);
	}
	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url]);

	// console.log(images);

	if (loading) {
		return <div>Loading data! Please Wait</div>;
	}
	if (errorMsg !== null) {
		return <div>Error Occured! {errorMsg}</div>;
	}

	return (
		<div className="container">
			<svg
				onClick={handlePrev}
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-arrow-left-circle-fill arrow arrow-left"
				viewBox="0 0 16 16"
			>
				<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
			</svg>
			{images.products && images.products.length
				? images.products.map((imageItem, index) => (
						// console.dir(imageItem.images)
						<img
							key={imageItem.id}
							alt={imageItem.images[1]}
							src={imageItem.images[2]}
							className={
								currentSlide === index
									? "current-image"
									: "current-image hide-current-image"
							}
						/>
                ))
				: null}
			<svg
				onClick={handleNext}
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-arrow-right-circle-fill arrow arrow-right"
				viewBox="0 0 16 16"
			>
				<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
			</svg>
			<span className="circle-indicators">
				{images.products && images.products.length
					? images.products.map((_, index) => (
							<button
								key={index}
								className={
									currentSlide === index
										? "current-indicator"
										: "current-indicator inactive-indicator"
								}
								onClick={() => setCurrentSlide(index)}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
}
