
var Events = {
	registered : {},
	scrollEvent : {
		register: function(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function(evtName, callback) {
			if (!callback || Events.registered[evtName] === callback) {
				Events.registered[evtName] = null;
			};
		}
	}
};

module.exports = Events;
