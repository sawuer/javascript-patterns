var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
	  parent = MYAPP,
	  i;
	// отбросить начальный префикс – имя глобального объекта
	if (parts[0] === 'MYAPP') {
	  parts = parts.slice(1);
	}
	for (i = 0; i < parts.length; i += 1) {
		// создать свойство, если оно отсутствует
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};



console.log(MYAPP)
