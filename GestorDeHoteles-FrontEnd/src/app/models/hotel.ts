export class Hotel{

    constructor(
        _id: string,
        public name: string,
        public direccion: string,
        public solicitud: string,
        public reservation: [],
        public room: [],
        public event: [],
        public user: [],
        public admin: []
    ){}
}