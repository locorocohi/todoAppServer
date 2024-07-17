import { AppDataSource } from "./db/data-source"
import app from "./app"

(async () => {
  console.log(1)
  await AppDataSource.initialize().catch((error) => console.log(error));
  console.log(2)
    app.listen(process.env.PORT, () => {
      console.log('Server start');
    });
})();