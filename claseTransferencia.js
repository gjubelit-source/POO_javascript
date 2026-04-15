//11. Clase BankAccount con transferencias entre cuentas
//Escriba un programa JavaScript que cree una clase llamada BankAccount con propiedades para el número de cuenta,
// el nombre del titular de la cuenta y el saldo. Incluir métodos para depositar, retirar y transferir dinero entre cuentas. 
// Cree múltiples instancias de la clase BankAccount y realice operaciones como depositar, retirar y transferir dinero


class BankAccount {
    constructor(nCuenta, tCuenta, saldo) {
        this.nCuenta = nCuenta;
        this.tCuenta = tCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
        return `Nuevo saldo de ${this.tCuenta}: ${this.saldo}`;
    }

    retirar(cantidad) {
        if (cantidad > this.saldo) {
            return "saldo insuficientes";
        }
        this.saldo -= cantidad;
        return ` Tu Nuevo saldo es de ${this.tCuenta}: ${this.saldo}`;
    }

    transferir(cantidad, cuentaDestino) {
        if (cantidad > this.saldo) {
            return "Saldo  insuficientes para transferir";
        }

        this.saldo -= cantidad;
        cuentaDestino.saldo += cantidad;

        return `Transferencia de ${cantidad} realizada de ${this.tCuenta} a ${cuentaDestino.tCuenta}`;
    }
}

let cuenta1 = new BankAccount(1, "Jubelit", 2000);
let cuenta2 = new BankAccount(2, "Ana", 250);

console.log(cuenta1.depositar(100));     
console.log(cuenta1.retirar(50));       
console.log(cuenta1.transferir(400, cuenta2)); 

console.log(cuenta1.saldo); 
console.log(cuenta2.saldo); 