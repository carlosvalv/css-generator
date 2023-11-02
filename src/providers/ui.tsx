import { ReactNode, useEffect, useReducer } from 'react';
import InterfaceContext, { INTERFACECONTEXT_DEFAULT, reducer, setOpenMenu } from '../context/interface';
import Page from '../types/page';

type Props = {
  children: ReactNode;
  page: Page
};

export default function InterfaceProvider(props: Props) {
  const { children, page } = props;
  const [state, dispatch] = useReducer(reducer, INTERFACECONTEXT_DEFAULT);

  useEffect(() => {
    dispatch(setOpenMenu(false));
  }, [dispatch, page]);

  return (
    <InterfaceContext.Provider value={[state, dispatch]}>
      {children}
    </InterfaceContext.Provider>
  );
}
