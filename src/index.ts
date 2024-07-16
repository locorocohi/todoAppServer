import { AppDataSource } from "./db/data-source"
import app from "./app"

(async () => {
  await AppDataSource.initialize().catch((error) => console.log(error));

    app.listen(process.env.DB_PORT, () => {
      console.log('Server start');
    });
})();