import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Css/Home.css";

function Home() {
	const [SlideIndex, setSlideIndex] = useState(0);

	const HandleSlide = (direction) => {
		if (direction === "right") {
			setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2);
		}
		if (direction === "left") {
			setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0);
		}
	};

	return (
		<main>
			<section id="Slider">
				<div
					id="Wrapper"
					style={{ transform: `translateX(${SlideIndex * 100}vw)` }}
				>
					<div className="Slide">
						<div className="ImgContainer">
							<div className="InfoContainer">
								<h3>1</h3>
								<span>
									<button>SHOP MEN</button>
									<button>SHOP WOMEN</button>
								</span>
							</div>
							<img
								src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2021/microsoftteams-image-(10).png"
								alt="Images"
							/>
						</div>
					</div>
					<div className="Slide">
						<div className="ImgContainer">
							<div className="InfoContainer">
								<h3>2</h3>
								<span>
									<button>SHOP MEN</button>
									<button>SHOP WOMEN</button>
								</span>
							</div>
							<img
								src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2021/microsoftteams-image-(10).png"
								alt="Images"
							/>
						</div>
					</div>
					<div className="Slide">
						<div className="ImgContainer">
							<div className="InfoContainer">
								<h3>3</h3>
								<span>
									<button>SHOP MEN</button>
									<button>SHOP WOMEN</button>
								</span>
							</div>
							<img
								src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2021/microsoftteams-image-(10).png"
								alt="Images"
							/>
						</div>
					</div>
				</div>
				<FontAwesomeIcon
					className="Arrow Right"
					icon={faArrowRight}
					onClick={() => HandleSlide("right")}
				/>
				<FontAwesomeIcon
					className="Arrow Left"
					icon={faArrowLeft}
					onClick={() => HandleSlide("left")}
				/>
			</section>
		</main>
	);
}

export default Home;
