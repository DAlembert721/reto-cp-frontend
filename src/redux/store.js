import {configureStore} from "@reduxjs/toolkit";
import ui from "./reducers/ui";

export default configureStore({
   reducer: {
      ui,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
});