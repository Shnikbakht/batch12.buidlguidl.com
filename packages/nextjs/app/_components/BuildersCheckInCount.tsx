"use client";

import React from "react";
import { displayTxResult } from "../debug/_components/contract";
import { useReadContract } from "wagmi";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useDeployedContractInfo, useTargetNetwork } from "~~/hooks/scaffold-eth";

const CONTRACT_NAME = "BatchRegistry";

// Define the ABI for the BatchRegistry contract
// The ABI is a JSON object that defines the functions and their parameters of a contract
// Could be generated from the contract's ABI file or manually created
// Check packages/nextjs/app/debug/_components/contract/ContractVariables.tsx for an example of how to use the ABI programmatically
const BatchRegistryABI = {
  checkedInCounter: {
    name: "checkedInCounter",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
} as const;

function BuildersCheckInCount() {
  // Get the deployed contract data
  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo({
    contractName: CONTRACT_NAME,
  });

  const { targetNetwork } = useTargetNetwork();

  // Get the result of the target function call from the deployed contract
  const {
    data: result,
    isFetching,
    error,
  } = useReadContract({
    address: deployedContractData?.address,
    functionName: BatchRegistryABI.checkedInCounter.name,
    abi: [BatchRegistryABI.checkedInCounter],
    chainId: targetNetwork.id,
    query: {
      retry: false,
    },
  });

  return (
    <div className="text-lg flex gap-2 justify-center items-center">
      <span className="font-bold">Checked in builders count:</span>
      {deployedContractLoading || isFetching ? (
        <ArrowPathIcon className="size-5 animate-spin" />
      ) : error ? (
        <span className="text-error">Error!</span>
      ) : (
        <span>{displayTxResult(result)}</span>
      )}
    </div>
  );
}

export default BuildersCheckInCount;
