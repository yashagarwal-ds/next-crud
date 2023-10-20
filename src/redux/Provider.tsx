"use client";

import {store} from "@/src/redux/store";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    {children}
    </Provider>;
}
