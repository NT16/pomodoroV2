import { index, route, layout } from "@react-router/dev/routes";

export default [
  layout("./views/layouts/rootLayout.jsx", [
    index("./routes/home.jsx"),
    route("settings", "./routes/settings.jsx"),
    route("about", "./routes/about.jsx"),
  ]),
];
