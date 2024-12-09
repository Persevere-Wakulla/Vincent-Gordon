import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Planet = ({ data }) => {
	const [normalView, setNormalView] = useState(true);
	const [internalView, setInternalView] = useState(false);
	const [surfaceView, setSurfaceView] = useState(false);
	const [activeBtn, setActiveBtn] = useState("01 OVERVIEW");
	const [locatePath, setLocatePath] = useState("");

	// console.dir(location.pathname)
	function handleClick(e) {
		const name = e.target.textContent;
		const background = location.pathname;
		if (name === "01 OVERVIEW") {
			setActiveBtn((c) => `${name}`);
			if (background === "/") setLocatePath("mercury");
			setLocatePath(background);
			setNormalView(true);
			setInternalView(false);
			setSurfaceView(false);
			console.log(data.active);
		}
		if (name === "02 INTERNAL STRUCTURE") {
			setActiveBtn((c) => `${name}`);
			if (background === "/") setLocatePath("mercury");
			setLocatePath(background);
			setInternalView(true);
			setNormalView(false);
			setSurfaceView(false);
			console.log(background);
		}
		if (name === "03 SURFACE GEOLOGY") {
			setActiveBtn((c) => `${name}`);
			if (background === "/") setLocatePath("mercury");
			setLocatePath(background);
			setSurfaceView(true);
			setInternalView(false);
			setNormalView(false);
			console.log(background, locatePath);
		}
	}

	const overviewTemplate = (
		<div className="planet-container">
			<img src={data?.images?.planet} alt={data?.name} />
			<div className="data-container">
				<h1>{data?.name}</h1>
				<p>{data?.overview.content}</p>
				<p>
					Source:{" "}
					<a href={data?.overview.source}>
						Wikipedia{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-up-right-square-fill"
							viewBox="2 -4.5 8 24"
						>
							<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
						</svg>
					</a>
				</p>
			</div>
		</div>
	);

	const internalTemplate = (
		<div className="planet-container">
			<img src={data?.images?.internal} alt={data?.name} />
			<div className="data-container">
				<h1>{data?.name}</h1>
				<p>{data?.structure.content}</p>
				<p>
					Source:{" "}
					<a href={data?.structure.source}>
						Wikipedia{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-up-right-square-fill"
							viewBox="2 -4.5 8 24"
						>
							<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
						</svg>
					</a>
				</p>
			</div>
		</div>
	);
	const surfaceTemplate = (
		<div className="planet-container">
			<div className="surface-container">
				<img
					src={data?.images?.planet}
					className="surface-planet"
					alt={data?.name}
				/>
				<img
					src={data?.images?.geology}
					className="surface-geology"
					alt={data?.name}
				/>
			</div>
			<div className="surface-data-container">
				<h1>{data?.name}</h1>
				<p>{data?.geology.content}</p>
				<p>
					Source:{" "}
					<a href={data?.geology.source}>
						Wikipedia{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-up-right-square-fill"
							viewBox="2 -4.5 8 24"
						>
							<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
						</svg>
					</a>
				</p>
			</div>
		</div>
	);
	const style = { backgroundColor: normalView && data?.active  };
	
	return (
		<div>
			{normalView ? overviewTemplate : null}
			{internalView ? internalTemplate : null}
			{surfaceView ? surfaceTemplate : null}
			<div className="button-container">
				<button
					style={style}
					onClick={(e) => handleClick(e)}
				>
					01 OVERVIEW
				</button>

				<button style={{ backgroundColor: internalView && data?.active  }} onClick={(e) => handleClick(e)}>
					02 INTERNAL STRUCTURE
				</button>

				<button style={{ backgroundColor: surfaceView && data?.active  }} onClick={(e) => handleClick(e)}>
					03 SURFACE GEOLOGY
				</button>
			</div>
			<div className="statistics-container">
				<span>
					<p>ROTATION TIME</p> {data?.rotation}
				</span>
				<span>
					<p>REVOLUTION TIME</p> {data?.revolution}
				</span>
				<span>
					<p>RADIUS</p> {data?.radius}
				</span>
				<span>
					<p>AVERAGE TEMP</p> {data?.temperature}
				</span>
			</div>
		</div>
	);
};

export default Planet;
