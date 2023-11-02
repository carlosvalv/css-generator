import React from 'react';

export interface IInterfaceContext {
  openMenu: boolean;
}

export const INTERFACECONTEXT_DEFAULT = {
  openMenu: false,
};

enum InterfaceContextTypes {
  SetOpenMenu = 'SetOpenMenu',
}

type SetOpenMenuAction = {
  type: typeof InterfaceContextTypes.SetOpenMenu;
  enabled: boolean;
};

type InterfaceContextActionTypes = SetOpenMenuAction;

export const setOpenMenu = (enabled: boolean): InterfaceContextActionTypes => ({
  type: InterfaceContextTypes.SetOpenMenu,
  enabled,
});

const InterfaceContext = React.createContext<
[IInterfaceContext, React.Dispatch<InterfaceContextActionTypes>]
>([
  INTERFACECONTEXT_DEFAULT,
  () => {
    /**/
  },
]);
export default InterfaceContext;

export const reducer = (
  state: IInterfaceContext,
  action: InterfaceContextActionTypes,
): IInterfaceContext => {
  switch (action.type) {
    case InterfaceContextTypes.SetOpenMenu:
      return { ...state, openMenu: action.enabled };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
