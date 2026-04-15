//11. Clase BankAccount con transferencias entre cuentas

//Escriba un programa JavaScript que cree una clase llamada BankAccount con propiedades para el número de cuenta, 
// el nombre del titular de la cuenta y el saldo. Incluir métodos para depositar, retirar y transferir dinero entre cuentas. 
// Cree múltiples instancias de la clase BankAccount y realice operaciones como depositar, retirar y transferir dinero

class BankAccount{
    nCuenta;
    tCuenta;
    saldo;

constructor(nCuenta,tCuenta,saldo){
    this.nCuenta=nCuenta;
    this.tCuenta=tCuenta;
    this.saldo=saldo;
}
depositar(cantidad){
   this.saldo += cantidad;
        return` saldo de : ${this.saldo}`
}
retirar(cantidad){
      this.saldo-=cantidad;
            return` saldo   es : ${this.saldo}`

}
transferir(){

}
}