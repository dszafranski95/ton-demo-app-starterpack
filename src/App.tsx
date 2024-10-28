import { useEffect, useState } from 'react';
import './index.css';

//       <TonConnectButton className="TonConnectButton" />

import Arrow from './icons/Arrow';
import { bear, coin, rocket, trophy, highVoltage, notcoin } from './images';
import { THEME, TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";
const App = () => {
  const [points, setPoints] = useState(29857775);
  const [energy, setEnergy] = useState(5149);
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 12;
  const energyToReduce = 12;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (energy - energyToReduce < 0) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints(points + pointsToAdd);
    setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
    setClicks([...clicks, { id: Date.now(), x, y }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 6500));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.DARK }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          },
          {
            appName: "nicegramWallet",
            name: "Nicegram Wallet",
            imageUrl: "https://static.nicegram.app/icon.png",
            aboutUrl: "https://nicegram.app",
            universalLink: "https://nicegram.app/tc",
            deepLink: "nicegram-tc://",
            jsBridgeKey: "nicegramWallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android"]
          },
          {
            appName: "fintopio-tg",
            name: "Fintopio Telegram",
            imageUrl: "https://fintopio.com/tonconnect-icon.png",
            aboutUrl: "https://fintopio.com",
            universalLink: "https://t.me/fintopio?attach=wallet",
            bridgeUrl: "https://wallet-bridge.fintopio.com/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "tokenpocket",
            name: "TokenPocket",
            imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
            aboutUrl: "https://tokenpocket.pro",
            jsBridgeKey: "tokenpocket",
            platforms: ["ios", "android"]
          },
          {
            appName: "dewallet",
            name: "DeWallet",
            imageUrl: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
            aboutUrl: "https://delabwallet.com",
            universalLink: "https://t.me/dewallet?attach=wallet",
            bridgeUrl: "https://bridge.dewallet.pro/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "BitgetWeb3",
            name: "BitgetWeb3",
            imageUrl: "https://img.bitgetimg.com/image/third/1723701408284.png",
            aboutUrl: "https://www.bitget.com",
            universalLink: "https://t.me/BitgetOfficialBot?attach=wallet",
            bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
            platforms: ["ios", "android", "windows", "macos", "linux"]
          },
          {
            appName: "cdcTonWallet",
            name: "Crypto.com DeFi Wallet",
            imageUrl: "https://apro-ncw-api-file.crypto.com/wallet/logo",
            aboutUrl: "https://crypto.com/defi-wallet",
            universalLink: "https://wallet.crypto.com/deeplink/ton-connect",
            deepLink: "dfw://",
            jsBridgeKey: "cdcTonWallet",
            bridgeUrl: "https://wallet.crypto.com/sse/tonbridge",
            platforms: ["ios", "android", "chrome"]
          },
          {
            appName: "tobi",
            name: "Tobi",
            imageUrl: "https://app.tobiwallet.app/icons/logo.png",
            aboutUrl: "https://tobi.fun",
            universalLink: "https://t.me/TobiWalletBot?attach=wallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "trustwalletTon",
            name: "Trust",
            imageUrl: "https://assets-cdn.trustwallet.com/dapps/trust.logo.png",
            aboutUrl: "https://trustwallet.com/about-us",
            bridgeUrl: "https://tonconnect.trustwallet.com/",
            jsBridgeKey: "trustwalletTon",
            platforms: ["chrome", "ios", "android"]
          }
        ]
      }}
    >
      <div className="app">

        <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-white font-medium">
          <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="radial-gradient-overlay"></div>
          </div>

          <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">
            <div className="fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-white">
<div className="fixed top-0 left-0 w-full px-4 py-3 z-10 flex justify-between items-center bg-opacity-30 backdrop-filter backdrop-blur-md bg-gradient-to-r from-[#ffd700] to-[#ffcc00] shadow-lg border-b border-white/20">
  <button
    className="text-[#db2777] text-2xl font-bold py-2 px-6 rounded-full shadow hover:shadow-xl transition-all duration-300"
    onClick={() => document.getElementById('modal_play_games').showModal()}
    id="button_x"
  >
    PLAY GAMES
  </button>
  <TonConnectButton className="TonConnectButton" />
</div>

              <div className="text-base mt-14 flex items-center">
                <img src={coin} width={80} height={80} alt="Coin Icon" />
              </div>
              <div className="mt-5 text-3d flex items-center">
                <span className="ml-2">{points.toLocaleString()}</span>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full px-4 pb-4 z-10">
  <div className="w-full flex flex-col items-center">
    {/* High Voltage Section */}
    <div className="flex items-center justify-center mb-2">
      <img src={highVoltage} width={50} height={50} alt="High Voltage" />
      <div className="ml-2 text-center">
        <span className="text-white text-2xl font-bold block">{energy}</span>
        <span className="text-white opacity-75">/ 6500</span>
      </div>
    </div>

    {/* Menu Buttons */}
    <div className="menu-container w-full py-4 rounded-2xl flex justify-around">
      <button className="flex flex-col items-center gap-1" onClick={() => document.getElementById('modal_frens').showModal()}>
        <img src={bear} width={24} height={24} alt="Bear Icon" />
        <span>Games</span>
      </button>
      <div className="h-[48px] w-[2px] bg-[#33bbff]"></div>
      <button className="flex flex-col items-center gap-1" onClick={() => document.getElementById('modal_earn').showModal()}>
        <img src={bear} width={24} height={24} alt="Cupcake Icon" />
        <span>Boosts</span>
      </button>
      <div className="h-[48px] w-[2px] bg-[#33bbff]"></div>
      <button className="flex flex-col items-center gap-1" onClick={() => document.getElementById('modal_boosts').showModal()}>
        <img src={rocket} width={24} height={24} alt="Rocket Icon" />
        <span>Referrals</span>
      </button>
      <div className="h-[48px] w-[2px] bg-[#33bbff]"></div>
      <button className="flex flex-col items-center gap-1" onClick={() => document.getElementById('modal_rewards').showModal()}>
        <img src={bear} width={24} height={24} alt="Star Icon" />
        <span>Ranking</span>
      </button>
      <div className="h-[48px] w-[2px] bg-[#33bbff]"></div>
      <button className="flex flex-col items-center gap-1" onClick={() => document.getElementById('modal_defense').showModal()}>
        <img src={bear} width={24} height={24} alt="Shield Icon" />
        <span>Connect</span>
      </button>
    </div>
    
  </div>

  {/* Progress Bar */}
  <div className="w-full bg-glass rounded-full mt-4 p-1 relative">
    <div
      className="bg-gradient-to-r from-[#00f0ff] to-[#00ff7f] h-4 rounded-full shadow-[0px_0px_15px_#00f0ff,0px_0px_20px_#00ff7f]"
      style={{ width: `${(energy / 6500) * 100}%` }}
    ></div>
    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
      {Math.round((energy / 6500) * 100)}%
    </div>
  </div>
</div>


            <div className="flex-grow flex items-center justify-center">
              <div className='container pt-12'>
              <div className="relative pt-14" onClick={handleClick}>
                <img src={notcoin} width={400} height={400} alt="notcoin" />
                {clicks.map((click) => (
                  <div
                    key={click.id}
                    className="absolute text-5xl font-bold opacity-0"
                    style={{
                      top: `${click.y - 42}px`,
                      left: `${click.x - 28}px`,
                      animation: `float 1s ease-out`
                    }}
                    onAnimationEnd={() => handleAnimationEnd(click.id)}
                  >
                    12
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>

        <dialog id="modal_frens" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Frens Modal</h3>
            <p className="py-4">Information about Frens.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_frens').close()}>Close</button>
            </div>
          </div>
        </dialog>

        <dialog id="modal_earn" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Earn Modal</h3>
            <p className="py-4">Details on how to earn rewards.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_earn').close()}>Close</button>
            </div>
          </div>
        </dialog>

        <dialog id="modal_boosts" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Boosts Modal</h3>
            <p className="py-4">Explore the available boosts.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_boosts').close()}>Close</button>
            </div>
          </div>
        </dialog>

        <dialog id="modal_rewards" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Rewards Modal</h3>
            <p className="py-4">Details about the rewards system.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_rewards').close()}>Close</button>
            </div>
          </div>
        </dialog>

        <dialog id="modal_defense" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Defense Modal</h3>
            <p className="py-4">Information about defense mechanisms.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_defense').close()}>Close</button>
            </div>
          </div>
        </dialog>

        <dialog id="modal_play_games" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Games Modal</h3>
            <p className="py-4">Information about defense mechanisms.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById('modal_play_games').close()}>Close</button>
            </div>
          </div>
        </dialog>
      </div>
    </TonConnectUIProvider>
  );
};

export default App;
