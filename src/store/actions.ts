import { getDataRecord } from "../services/getDataRecord";
import { GetRecordsAction, RecordActions } from "../types/store";

export const navigate = (screen: any) => {
	return {
		action: 'navigate',
		payload: screen,
	};
};

export const GetRecords = async (): Promise<GetRecordsAction> => {
	const datarecord = await getDataRecord();
	return {
		action: RecordActions.GET,
		payload: datarecord,
	};
};