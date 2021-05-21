export class Reservacion{
    constructor(
        public fechaIngreso:Date,
        public fechaSalida:Date,
        public numeroTarjeta:Number,
        public totalPagar:Number,
        public room: []
    ){}
}