module.exports = function(app){
	var ds = app.dataSources.mysqlDs;
	var dbTables = ['User','AccessToken','ACL','RoleMapping','Role','Materias','Apuntes'];
	if(dbTables.length !== 0){
		ds.automigrate(dbTables, function(err){
			if(err) throw err;
			console.log('Tabla/s => [' + dbTables + '] creadas. \nEn:', ds.adapter.name);
		});
	}else{
		console.log('No hay tablas por crear.');
	}
}