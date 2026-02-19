import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.js";

import swaggerUi from "swagger-ui-express";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import swaggerSpec from "./swagger.js";

const app = express();
const PORT = process.env.PORT || 3000;

const theme = new SwaggerTheme();
const options = {
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
};

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
  // Rotas disponíveis: /api/v1/adocoes, /api/v1/adotantes, /api/v1/pets
});
