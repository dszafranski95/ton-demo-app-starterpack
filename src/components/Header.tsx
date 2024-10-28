import { TonConnectButton } from "@tonconnect/ui-react";
import './header.css';

export const Header = () => {
  return (
    <header>
      <span>My App with React UI</span>
      <TonConnectButton className="TonConnectButton" />
    </header>
  );
};
