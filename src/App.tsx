import { Provider } from "react-redux"
import store from "./store/index"
import "./style/style.scss"


export const App = () => {
    return (
        <Provider store={store}>
        <div>Applicacion cachonda</div>
        </Provider>
    ) 

}
