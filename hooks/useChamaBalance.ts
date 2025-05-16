import { client } from "@/utils/client";
import { useWalletBalance } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { useEffect, useState } from "react";
import { getTokenPriceInUSDT } from "@/utils/getTokenPrice";

const useChamaBalance = (chamaAddress: string) => {
  const [usdcPrice, setUsdcPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const { data: usdcBalance, error: usdcError } = useWalletBalance({
    tokenAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    address: chamaAddress,
    chain: baseSepolia,
    client: client,
  });

  useEffect(() => {
    setLoading(true);
    getTokenPriceInUSDT("usdc").then(setUsdcPrice);
    setLoading(false);
  }, []);

  const usdcBalanceInUSD = Number(usdcBalance?.value) || 0 * usdcPrice;

  return { usdcBalanceInUSD, loading, usdcError };
};

export default useChamaBalance;
