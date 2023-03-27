// Trong file index.js, import Provider - đây là component kết nối Redux Store với component React 
import {Provider} from 'react-redux';
import { store } from "./redux/configStore";

root.render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route></Route>
        ...
      </Routes>
    </BrowserRouter>
  </Provider>
  </>
)