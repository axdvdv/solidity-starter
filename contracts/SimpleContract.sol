// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.7.0;
import { ISimpleContract } from "./interfaces/ISimpleContract.sol";

/// @title A simple smart contract example
/// @author davy42
/// @notice If you don't understand anything, You should read "The hitchhiker's guide to the galaxy"
/// @dev Don't panic!
contract SimpleContract is ISimpleContract {

    /// @dev Address of the supercomputer
    address private deepThought;
    
    /// @dev Answer to the Ultimate Question of Life, the Universe, and Everything
    uint256 private answer;

    /// @dev The Ultimate Question of Life, the Universe, and Everything
    string private question;

    /// @notice Supercomputer needs time to think
    /// @dev It's about 10 million years 
    uint256 constant private GENERATE_QUESTION_TIME = 3560000000 days;

    // Fired on creating question
    // @param question  new ultimate question
    event QuestionCreated(string question);

    /// Constructor of the contract
    /// @notice constructor is only called on deploy contract 
    /// @dev Constructor set answer and address of the Deep Thought
    /// @param _answer the answer
    constructor(uint256 _answer) public {
        answer = _answer;
        deepThought = msg.sender;
    }

    /// @notice 
    /// @dev Throws if msg.sender is not the owner
    modifier onlyDeepThought() {
        require(msg.sender == deepThought, "access denied");    
        _;
    }

    /// Sets the question
    /// @notice Only Deep Thought can set question
    /// @dev Function throws if msg.sender is not the Deep Thought
    /// @param _question the question
    function setQuestion(string calldata _question) external override onlyDeepThought {
        /* solhint-disable not-rely-on-time */
        require(block.timestamp >= GENERATE_QUESTION_TIME, "The question is not ready yet");
        /* solhint-disable not-rely-on-time */
        question = _question;
        emit QuestionCreated(_question);
    }

    /// Returns the answer
    /// @notice Always know where your towel is
    /// @dev This function is mostly harmless
    /// @return the answer
    function getAnswer() external view override returns(uint256) {
        return answer;
    }

    /// Returns the question
    /// @notice 
    /// @dev 
    /// @return the answer
    function getQuestion() external view override returns(string memory) {
        /* solhint-disable not-rely-on-time */
        if (block.timestamp >= GENERATE_QUESTION_TIME) {
        /* solhint-disable not-rely-on-time */
            return question;
        } else {
            return "please wait for the supercomputer comes up with a question";
        }
    }

}
