import app from './app.js'
import { Sequelize } from "sequelize";


const db = new Sequelize(process.env.DbConnection);
const connectToDatabase = async () => {
  try {
    const test = await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectToDatabase();

const PORT = process.env.PORT || 2800;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
