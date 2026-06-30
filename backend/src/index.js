import "./config/env.js";

import {connectDB} from "./db/db.js";
import app from "./app.js";


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
})
