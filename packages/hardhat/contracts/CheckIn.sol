// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public owner;
    IBatchRegistry public batchRegistry;

    event CheckedIn(address indexed by);
    event ErrorOccurred(address indexed by, string reason);

    constructor(address _batchRegistry) {
        require(_batchRegistry != address(0), "BatchRegistry address cannot be zero");
        owner = msg.sender;
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkMeIn() external {
        
        try batchRegistry.checkIn() {
            emit CheckedIn(msg.sender);
        } catch {
            emit ErrorOccurred(msg.sender, "BatchRegistry check-in failed (non-EOA required)");
            revert("BatchRegistry check-in failed");
        }
    }
}
