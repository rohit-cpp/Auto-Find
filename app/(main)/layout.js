const { Divide } = require("lucide-react");
const { Children } = require("react");

const MainLayout = ({ children }) => {
  return <div className="container mx-auto my-32">{children}</div>;
};
export default MainLayout;
