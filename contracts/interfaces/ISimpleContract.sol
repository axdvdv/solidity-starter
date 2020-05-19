// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;


interface ISimpleContract {
    /// Sets the question
    /// @notice only Deep Thought can set question
    /// @dev function throws if msg.sender is not the Deep Thought
    /// @param _question The question
    function setQuestion(string calldata _question) external;

    /// Returns the answer
    /// @notice Always know where your towel is
    /// @dev This function is mostly harmless
    /// @return the answer
    function getAnswer() external view returns(uint256);

    /// Returns the question
    /// @notice 
    /// @dev 
    /// @return the answer
    function getQuestion() external view returns(string memory);
}
