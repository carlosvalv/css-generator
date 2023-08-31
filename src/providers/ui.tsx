
import { ReactNode, useEffect, useReducer } from "react";
import InterfaceContext, { INTERFACECONTEXT_DEFAULT, reducer, setOpenMenu } from "../context/interface";

type Props = {
    children: ReactNode;
};

export default function InterfaceProvider(props: Props) {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, INTERFACECONTEXT_DEFAULT);
    useEffect(()=>{
        dispatch(setOpenMenu(false))
    },[dispatch])
    return (
        <InterfaceContext.Provider value={[state, dispatch]}>
            {children}
        </InterfaceContext.Provider>
    );
}