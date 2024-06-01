import { RecordActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
	//Payload: es el valor que queremos cambiar o asignar
	const { action, payload } = currentAction;

	switch (action) {
		case 'navigate':
			currentState.screen = payload;
			break;
	}

	switch (action) {
		case RecordActions.GET:
			return {
				...currentState,
				recordlist: payload,
			};
	}
	return currentState;
//para agregar una accion solo copiar y pegar el switch cambiando el xaso y el payload
	};

	
