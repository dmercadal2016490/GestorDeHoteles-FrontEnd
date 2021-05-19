export class Evento{

    constructor(
        public tipoEvento: string,
        public fecha: Date,
        public horario: string,
        public descripcion: string
    ){}
}