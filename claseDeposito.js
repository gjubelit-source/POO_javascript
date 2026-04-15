//4. Clase BankAccount con depósito y retiro

//Escriba un programa JavaScript que crea una clase llamada "BankAccount" con propiedades para el número de cuenta y el saldo. 
//Incluir métodos para depositar y retirar dinero de la cuenta.
//Cree algunas instancias de la clase "Cuenta bancaria", deposite algo de dinero y retire una parte de la misma.

class BankAccount{
    numeroCuenta;
    saldo;
    constructor(numeroCuenta,saldo){
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;

    }
    deposito(cantidad){
        this.saldo += cantidad;
        return` saldo de : ${this.saldo}`
    }
    retiro(cantidad){
            this.saldo-=cantidad;
            return` Tu monto actual  es : ${this.saldo}`
        }
    }

let cuenta1 = new BankAccount("123", 1000);

console.log(cuenta1.deposito(200));  // 1200
console.log(cuenta1.retiro(300));    // 900