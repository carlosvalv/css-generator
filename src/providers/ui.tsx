
import { ReactNode, useEffect, useReducer } from "react";
import InterfaceContext, { INTERFACECONTEXT_DEFAULT, reducer, setOpenMenu } from "../context/interface";
import { Page } from "../pages/mainPage";

type Props = {
    children: ReactNode;
    page: Page
};

export default function InterfaceProvider(props: Props) {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, INTERFACECONTEXT_DEFAULT);

    useEffect(()=>{
        dispatch(setOpenMenu(false))
    },[dispatch, props.page])

    return (
        <InterfaceContext.Provider value={[state, dispatch]}>
            {children}
        </InterfaceContext.Provider>
    );
}