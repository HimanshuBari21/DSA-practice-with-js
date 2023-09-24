Buses = [
    {
        "name": "Sabarmati",
        "start": "Mumbai - Borivali",
        "dest": "Ahmedabad",
        "stops": ["Mumbai - Borivali", "Vapi", "Valsad", "Surat", "Bharuch", "Ahmedabad"],
        "seatsAvailable": 6
    },
    {
        "name": "Tapti",
        "start": "Mumbai - CST",
        "dest": "Indore",
        "stops": ["Mumbai - CST", "Mumbai - Borivali", "Vapi", "Valsad", "Surat", "Ujjain", "Indore"],
        "seatsAvailable": 89
    }
]


function BusFinder(StartingPoint, DestinationPoint, Passenger) {

    var counter = 0

    for (let i = 0; i < Buses.length; i++) {

        if ((Buses[i].stops.indexOf(StartingPoint) != -1) && (Buses[i].stops.indexOf(DestinationPoint) != -1) && (Buses[i].stops.indexOf(StartingPoint) < Buses[i].stops.indexOf(DestinationPoint)) && (Buses[i].seatsAvailable >= Passenger)) {

            console.log("Name: " + Buses[i].name);
            console.log("Seats Available: " + Buses[i].seatsAvailable);
            counter++
        }

    }
    if (counter == 0) {
        console.log("No Bus Available for Seleted Route");
    }


}

BusFinder("Mumbai - Borivali", "Vapi", 5)