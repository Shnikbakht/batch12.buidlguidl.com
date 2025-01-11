"use client";

import React from "react";
import { displayTxResult } from "../debug/_components/contract";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
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

  return (
    <div className="text-lg flex gap-2 justify-center items-center">
      <span className="font-bold">Checked in builders count:</span>
      {isLoading || (!error && !counter) ? (
        <ArrowPathIcon className="size-5 animate-spin" />
      ) : error ? (
        <span className="text-error">Error!</span>
      ) : (
        <span>{displayTxResult(counter)}</span>
      )}
    </div>
  );
}

export default BuildersCheckInCount;
