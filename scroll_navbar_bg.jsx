import React, { useState, useEffect } from "react";

const scroll_navbar_bg = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return <div className={`navbar ${show && "navbar__bg"}`}>navbar</div>;
};

export default scroll_navbar_bg;
