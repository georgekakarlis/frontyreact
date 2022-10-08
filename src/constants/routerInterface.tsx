export declare function BrowserRouter(
    props: BrowserRouterProps
  ): React.ReactElement;
  
  interface BrowserRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
  }