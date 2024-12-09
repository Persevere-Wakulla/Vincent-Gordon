import { useState, useId } from "react";
import { useParams, useLoaderData, useOutletContext } from "react-router-dom";
import { useLocalStorage } from "../Utils/fetching";
import StarRating from "./StarRating";
import { nanoid } from "nanoid";
export default function ProductCard() {
	const { id } = useParams();
	const myId = useId();
	const item = useLoaderData();
	const basePrice = Number(item.price.toFixed(2));
	const [prices, setPrices] = useState(Number(item.price));
	const [
		searchQuery,
		setSearchQuery,
		buildCart,
		setBuildCart,
		basket,
		setBasket,
		quantity,
		setQuantity,
		price,
		setPrice,
	] = useOutletContext();
	const [counter, setCounter] = useState(1);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [reviews, setReviews] = useState(false);
	function handlePrev() {
		setCurrentSlide(
			currentSlide === 0 ? item.images.length - 1 : currentSlide - 1
		);
	}

	function handleNext() {
		setCurrentSlide(
			currentSlide === item.images.length - 1 ? 0 : currentSlide + 1
		);
	}
	// console.log(myId);
	function addItem(item) {
		if (counter != 0) {
			const newItem = {
				id: `${item.id}-${nanoid()}`,
				image: item.images[0],
				title: item.title,
				quantity: counter,
				price: prices,
			};
			setQuantity((c) => c + counter);
			setPrice((c) => c + prices);
			setBuildCart((c) => [...c, newItem]);
		}
	}
	function handleClick(e) {
		let target = e.target.classList;
		if (target.contains("plus")) {
			setCounter((c) => c + 1);
			setPrices((c) => c + basePrice);
		}
		if (target.contains("minus") && counter !== 0) {
			setCounter((c) => c - 1);
			setPrices((c) => c - basePrice);
		}
	}

	let star = "⭐";
	// let like = "👍";
	let ratingSystem = Math.ceil(item.rating);

	// let likeSystem = item.rating.count + like;

	return (
		<div>
			<div id="singleCard">
				<div>
					<div className="imageContainer">
						{item.images.length > 1 ? (
							<svg
								onClick={handlePrev}
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-chevron-left arrow arrow-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
								/>
							</svg>
						) : null}
						{item.images.map((img, index) => (
							<img
								key={index}
								src={img}
								alt="image"
								id="itemImg"
								className={
									currentSlide === index
										? "current-image"
										: "current-image hide-current-image"
								}
							/>
						))}
						{item.images.length > 1 ? (
							<svg
								onClick={handleNext}
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-chevron-right arrow arrow-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
								/>
							</svg>
						) : null}
					</div>

					<div className="imageCarouselContainer">
						{item.images.map((img, index) => (
							<img
								key={index}
								className={
									currentSlide === index
										? "current-indicator"
										: "current-indicator inactive-indicator"
								}
								onClick={() => setCurrentSlide(index)}
								src={img}
								alt="image"
							/>
						))}
					</div>
					<button className="reviewBtn" onClick={() => setReviews((c) => !c)}>
						Open Reviews <span>{item.reviews.length}</span>
					</button>
				</div>
				<div id="singleCardDescription">
					<h3>L and D</h3>
					<h1 id="title">{item.title}</h1>
					<span id="description">{item.description}</span>

					<p id="ratings">
						{/* <span id="votes">{likeSystem}</span> */}
						<span id="stars">{<StarRating noOfStars={ratingSystem} />}</span>
						<span id="price">${prices.toFixed(2)}</span>
					</p>
					<div className="add">
						<div className="addQuantity">
							<span onClick={(e) => handleClick(e)}>
								<i className="fas minus fa-minus-circle "></i>
							</span>
							<span>{counter}</span>
							<span onClick={(e) => handleClick(e)}>
								<i className="fas plus fa-plus-circle"></i>
							</span>
						</div>
						<button className="addToCart" onClick={() => addItem(item)}>
							{" "}
							<i className="fas  fa-shopping-cart"></i>Add to cart
						</button>
					</div>
				</div>
			</div>
			{reviews
				? !basket && (
						<div className="reviews">
							{item.reviews.map((x, i) => (
								<div className="singleReview" key={`${x.id}${i}`}>
									<h3>{x.reviewerName}</h3>
									<p>
										{x.comment}
										<span> {<StarRating noOfStars={x.rating} />}</span>
									</p>
									<p>{x.date}</p>
								</div>
							))}
						</div>
				  )
				: null}
		</div>
	);
}
