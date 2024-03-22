import { RelayEnvironmentProvider } from "react-relay";
import environment from "./environment";
import ImagesContainer from "./containers/imagesContainer/ImagesContainer";

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <div className="m-6">
      <ImagesContainer />
    </div>
  </RelayEnvironmentProvider>
);

export default App;
