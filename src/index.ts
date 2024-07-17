import { AppDataSource } from "./db/data-source"
import app from "./app"
import config from "./config";

(async () => {
  console.log(1)
  await AppDataSource.initialize().catch((error) => console.log(error));
  console.log(2)
    app.listen(config.port, () => {
      console.log('Server start');
    });
})();
