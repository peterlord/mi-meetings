export const SHOW_COSTS = 'SHOW_COSTS';

export default function(showCosts){
	return {
		type: SHOW_COSTS,
		showCosts
	}
}