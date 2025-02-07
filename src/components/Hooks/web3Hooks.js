import { useHooks } from "../Providers/web3Provider"

const enhanceHook = swrRes => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error
  }
}

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useAccount)())
  return {
    account: swrRes
  }
}

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks(hooks => hooks.useNetwork)())
  return {
    network: swrRes
  }
}