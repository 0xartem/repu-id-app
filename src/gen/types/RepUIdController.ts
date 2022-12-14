/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RepUIdControllerInterface extends utils.Interface {
  functions: {
    "identityOfNullifier(uint256)": FunctionFragment;
    "verifyAndExecute(address,uint256,uint256,uint256[8])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "identityOfNullifier" | "verifyAndExecute"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "identityOfNullifier",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAndExecute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "identityOfNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAndExecute",
    data: BytesLike
  ): Result;

  events: {
    "RepUIdCreated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RepUIdCreated"): EventFragment;
}

export interface RepUIdCreatedEventObject {
  to: string;
  nullifierHash: BigNumber;
}
export type RepUIdCreatedEvent = TypedEvent<
  [string, BigNumber],
  RepUIdCreatedEventObject
>;

export type RepUIdCreatedEventFilter = TypedEventFilter<RepUIdCreatedEvent>;

export interface RepUIdController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RepUIdControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    identityOfNullifier(
      nullifierHash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verifyAndExecute(
      input: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  identityOfNullifier(
    nullifierHash: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  verifyAndExecute(
    input: PromiseOrValue<string>,
    root: PromiseOrValue<BigNumberish>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    identityOfNullifier(
      nullifierHash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    verifyAndExecute(
      input: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RepUIdCreated(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      nullifierHash?: PromiseOrValue<BigNumberish> | null
    ): RepUIdCreatedEventFilter;
    RepUIdCreated(
      to?: PromiseOrValue<string> | null,
      nullifierHash?: PromiseOrValue<BigNumberish> | null
    ): RepUIdCreatedEventFilter;
  };

  estimateGas: {
    identityOfNullifier(
      nullifierHash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAndExecute(
      input: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    identityOfNullifier(
      nullifierHash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAndExecute(
      input: PromiseOrValue<string>,
      root: PromiseOrValue<BigNumberish>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
