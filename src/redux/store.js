import {configureStore} from "@reduxjs/toolkit";
import ui from "./reducers/ui";
import premieres from "./reducers/premieres";
import auth from "./reducers/auth";
import candyStore from "./reducers/candyStore";
import payment from "./reducers/payment";

export default configureStore({
    reducer: {
        ui,
        auth,
        premieres,
        candyStore,
        payment,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});