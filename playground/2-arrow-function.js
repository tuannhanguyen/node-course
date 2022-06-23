const square = (x) => x*x

const event = {
    name: 'Birthday Party',
    guestList: ['Nhan', 'Linh', 'Dat'],
    printGuestList() {

        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' attending ' + this.name)
        })
    }
}

event.printGuestList()