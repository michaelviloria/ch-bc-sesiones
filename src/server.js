import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import router from "./routes/routes.js";

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const app = express();

/**
 * <------------------------- Configuracion de Pug ------------------------->
 */

app.set("view engine", ".pug");
app.set("views", "./src/views");

/**
 * <------------------------- Configuracion de Session ------------------------->
 */

const ageCookie = (minutes) => {
	if (minutes === 1) {
		return 60000;
	} else {
		return minutes * 60000;
	}
};

app.use(cookieParser());
app.use(
	session({
		store: MongoStore.create({
			mongoUrl:
				"mongodb+srv://michaelviloria:michaelviloria@cluster0.tctmaqg.mongodb.net/?retryWrites=true&w=majority",
			mongoOptions: advancedOptions,
			ttl: 60,
			collectionName: "sessions",
		}),
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: ageCookie(2) },
	})
);

/**
 * <------------------------- Configuracion de Rutas ------------------------->
 */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

export default app;
