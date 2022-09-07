export const home = (req, res) => {
	res.render("home", { name: req.session.name });
};

export const login = (req, res) => {
	let { name } = req.body;
	req.session.name = name;
	res.redirect("/");
};

export const destroy = (req, res) => {
	try {
		req.session.destroy();
		res.redirect("/");
	} catch (error) {
		res.status(500).send("Error: ", error);
	}
};

// export const logout = (req, res) => {
// 	setTimeout(() => {
// 		res.redirect("/");
// 	}, 3000);
// 	res.render("logout", {});
// };
