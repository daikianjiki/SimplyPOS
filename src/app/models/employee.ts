/**
 * In Angular, model interfaces are TS interfaces that define the structure and shape of the data
 * objects used within an application. These interfaces serve as contracts that define the properties
 * and their types that a particular data object should have.
 * 
 * Model interfaces play a crucial role in maintaining strong typing and providing a clear definition
 * of the data structures used throughout an Angular application. They help in improving code
 * readability, facilitating code navigation, and enabling early detection of potential errors.
 * 
 * Interfaces in TS enable static type checking. By defining interfaces for data objects,
 * you can leverage the type system to catch errors at compile-time, helping to prevent 
 * runtime issues and improve the reliability of your application. 
 */

export enum AccessLevel {
    ASSOCIATE = 'associate', //associate has limited access to complete a sales-related transactions without access to inventory transactions
    STOCK = 'stock', //stock has limited access to complete inventory-related transactions without access to ales transactions
    MANAGER = 'manager' //manager has complete access to both sales and inventory-related transactions
}

export interface Employee {
    id: number //required contraint of a data object
    username: string //username for POS is typically numberical
    password: string
    firstName: string
    lastName: string
    accessLevel: AccessLevel //this will define the access level for each employee
}