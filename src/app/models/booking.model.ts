export class BookingModel{
    constructor(
        public id?: number,
        public activity_id?:number,
        public num_of_participants?:number,
        public is_validated?:boolean,
        public created_at?: Date,
        public updated_at?: Date,
        public user_id?: number,
        public user_name?:string,
        public user_image_id?:number,
        public date?:Date
    ) {
        if(!num_of_participants)
            this.num_of_participants = 1;
    }
}