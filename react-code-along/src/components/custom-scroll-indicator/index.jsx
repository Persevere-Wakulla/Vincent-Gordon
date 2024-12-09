import { useEffect, useState } from "react";
import './stylz.css'

export default function ScrollIndicator({ url }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [scrollPercentage, setScrollPercentage] = useState(0);

	async function fetchData(getUrl) {
		try {
			setLoading(true);
			const response = await fetch(getUrl);
			const data = await response.json();
			if (data && data.products && data.products.length > 0) {
				setData(data.products);
				setLoading(false);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(url);
	}, [url]);

	function handleScrollPercentage() {
		const howMuchScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((howMuchScroll / height) * 100);
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

    if (errorMsg) {
        return <div>Error Occured! {errorMsg}</div>
    }

    if (loading) {
        return <div>Loading Data! Please Wait</div>
    }

	return (
		<div>
			<div className="top-container">
			<h1>Custom Scroll Indicator</h1>
				<div className="scroll-progress-tracking-container">
					<div
						className="current-progress-bar"
						style={{ width: `${scrollPercentage}%` }}
					></div>
				</div>
			</div>

			<div className="data-container">
				{data && data.length > 0
					? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
					: null}
			</div>
		</div>
	);
}
