import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/ReduxStore";
import {Navigate} from "react-router-dom";

export const useAppSelector = (callback: (state: RootState) => any) => useSelector(callback);
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useNavigateCondition = (condition: any, path: string) => !condition ? Navigate({to: path}) : null;