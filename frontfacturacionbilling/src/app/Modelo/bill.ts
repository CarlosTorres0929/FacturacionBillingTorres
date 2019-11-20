import { Timestamp } from 'rxjs';

export class bill{
    id:number;
    expedition_date:Date;
    due_date:Date;
    receipt_date:Date;
    bill_state_id:number;
    user_id:number;
}