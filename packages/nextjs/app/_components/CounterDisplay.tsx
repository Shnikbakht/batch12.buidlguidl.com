import { displayTxResult } from "../debug/_components/contract";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

export async function CounterDisplay({
  data: counter,
  isLoading,
  error,
}: {
  data?: bigint;
  isLoading: boolean;
  error: Error | null;
}) {
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
