export default function(user, nextState, replaceState, callback) {
	if(!user.userName){
		replaceState('/login')
	}
}