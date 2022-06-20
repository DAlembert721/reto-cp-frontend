import {configureStore} from "@reduxjs/toolkit";
import ui from "./reducers/ui";
import premieres from "./reducers/premieres";
import auth from "./reducers/auth";

export default configureStore({
    reducer: {
        ui,
        auth,
        premieres,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});