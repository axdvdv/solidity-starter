const { BN, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');
require('chai').use(require('chai-bn')(BN)).should();
const SimpleContract = artifacts.require('SimpleContract');
const QUESTION = "21 plus 21";

// WARNING: Test use time travel.
// Please, restart your network before launching tests

contract('simple contract test', ([deepThought, Vogons]) => {

    var contract;

    before('init contract', async () => {
        contract = await SimpleContract.deployed();
    });

    describe('Answer test', () => {
        it('should get right answer', async () => {
            const answer = await contract.getAnswer.call();
            answer.should.bignumber.equal(new BN(42), "Wrong answer");
        });
    });

    describe('Negative question tests', () => {
        it('Should not set question', async () => {
            await expectRevert(
                contract.setQuestion('to be or not to be', { from: deepThought }),
                "The question is not ready yet"
            );
        });

        it('Vogons should not set question', async () => {
            await expectRevert(
                contract.setQuestion('to be or not to be', { from: Vogons }),
                "access denied"
            );
        });

        it('should not get question', async () => {
            const result = await contract.getQuestion.call();
            result.should.equal("please wait for the supercomputer comes up with a question");
        });
    });


    describe('Positive Question test', () => {

        it('should increase time', async () => {
            await time.increase(time.duration.days(3560000000 + 1));
        });

        it('should set question', async () => {
            const txResult = await contract.setQuestion(QUESTION, { from: deepThought });
            expectEvent(txResult, "QuestionCreated", { question: QUESTION });
        });

        it('should get question', async () => {
            const result = await contract.getQuestion.call();
            result.should.equal(QUESTION, "Wrong question");
        });
    });
});
