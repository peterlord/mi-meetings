export const COSTS_UPDATED = 'COSTS_UPDATED';

export default function(cost){
	return {
		type: COSTS_UPDATED,
		cost
	}
}