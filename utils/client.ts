import { createThirdwebClient } from "thirdweb";

const clientId = process.env.EXPO_PUBLIC_THIRD_WEB_CLIENT_ID;
const secretKey = process.env.EXPO_PUBLIC_THIRD_WEB_SECRET_KEY;

if (!clientId || !secretKey) {
  throw new Error(
    "THIRD_WEB_CLIENT_ID or THIRD_WEB_SECRET_KEY is not set in environment variables."
  );
}

export const client = createThirdwebClient({
  clientId,
  secretKey,
});
