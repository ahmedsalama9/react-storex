import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ByCategory from "../Components/ByCategory";
import Category from "../Components/Category";
import Hero from "../Components/Hero";
import LatestProducts from "../Components/LatestProducts";
function Home() {
    return (_jsxs("main", { children: [_jsx(Hero, {}), _jsx(Category, {}), _jsx(LatestProducts, {}), _jsx(ByCategory, {})] }));
}
export default Home;
