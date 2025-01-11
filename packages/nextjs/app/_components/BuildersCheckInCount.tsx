"use client";

import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CONTRACT_NAME = "BatchRegistry";
const FUNCTION_NAME = "checkedInCounter";

function BuildersCheckInCount() {
  // Get the result of the target function call from the deployed contract
  const {
    data: counter,
    isLoading,
    error,
  } = useScaffoldReadContract({
    contractName: CONTRACT_NAME,
    functionName: FUNCTION_NAME,
  });

  return <CounterDisplay data={counter} isLoading={isLoading} error={error} />;
}

export default BuildersCheckInCount;
