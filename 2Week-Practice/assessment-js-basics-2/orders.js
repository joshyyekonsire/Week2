/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////

//////////////////PROBLEM 1////////////////////


class Ticket {
    constructor (items, orderTime, customerId){
        this.items = items;
        this.orderTime = orderTime;
        this.customerId = customerId
        this.updateStatus = function updateStatus (newStatus){
            this.status = newStatus;
            console.log ('The order for customer ' + customerId + ' is now ' + newStatus)
        }
    }
    
}

let firstTicket = new Ticket ('pizza, bread, and soda', '7:03 PM', 575)
console.log (firstTicket)
console.log (firstTicket.updateStatus('cooking'))
