export const MEETING_LENGTH_UPDATED = 'MEETING_LENGTH_UPDATED';

export default function(meetingLength){
	return {
		type: MEETING_LENGTH_UPDATED,
		meetingLength
	}
}