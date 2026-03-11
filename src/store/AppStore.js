import { configureStore } from "@reduxjs/toolkit";
import CropReducer from "./CropSlice";
import UserDataReducer from "./UserDataSlice";
import ModalReducer from "./ModalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const cropPersistConfig = {
  key: "Crop",
  storage,
};

const userPersistConfig = {
  key: "UserData",
  storage,
};

const persistedCropReducer = persistReducer(cropPersistConfig, CropReducer);
const persistedUserDataReducer = persistReducer(userPersistConfig, UserDataReducer);

const rootReducer = combineReducers({
  Crop: persistedCropReducer,
  UserData: persistedUserDataReducer,
  Modal: ModalReducer,
});


const AppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(AppStore);

export default AppStore;

