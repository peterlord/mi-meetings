import { expect } from 'chai';
import calculateCost from './calculateCost'

describe('calculateCost', function() {


    it('should return 0 when no attendees', function() {
    	var meeting = {
    		meetingLength: 45,
    		attendees: []
    	};

    	var actualCost = calculateCost(meeting);

    	var expectedCost = 0;

    	expect(actualCost).to.be.equal(expectedCost);
    });

});