//modelo
var question = {
		text: 'Danos tu info básica',
		fields: [
			{
				text: 'Nombre',		//	Texto que se muestra como 'título' del campo
				field: 'user_name',	//	user_name, user_address... Whatever xD
				type: 'input'		//	input, textarea, checkbox
			},
			{
				text: '¿Casado?',		//	Texto que se muestra como 'título' del campo
				field: 'user_married',	//	user_name, user_address... Whatever xD
				type: 'checkbox'		//	input, textarea, checkbox
			}
		]
 	};