import { serverHttp } from "./src/app";

serverHttp.listen(4000, () => console.log('Server is running on PORT 4000'));