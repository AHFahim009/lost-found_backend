import app from "./app";
import config from "./app/config";


const main = async () => {
  const server = app.listen(config.PORT, () => {
    console.log(`\n server is running on ${config.PORT}`);

  })
}
main()