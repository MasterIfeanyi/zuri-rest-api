const data = {
    flights: require("../models/flights.json"),
    setFlights: function (data) {
        this.flights = data
    }
}

const createFlight = (req, res) => {

    try {
        const flight = {
            title: req.body.title,
            time: req.body.time,
            price: req.body.price,
            date: req.body.date
        }

        if (!req.body.title) {
            return res.status(400).json({ 'message': 'please fill all fields.' });
        }

        data.setFlights([...data.flights, flight]);
        res.status(201).json(data);
    } catch (error) {
        return res.status(400).json({ "message": `${error.message}` });
    }
}

const getAllFlights = (req, res) => {
    try {
        return res.status(200).json(data.flights)
    } catch (error) {
        return res.status(500).json({"message": `${error.message}`})
    }
}

const updateFlight = (req, res) => {

    const {title} = req.body

    try {

        const flight = data.flights.find(flight => flight.title === title);
        if (!flight) {
            return res.status(400).json({ "message": `${title} not found` });
        }

        if (flight) {
            flight.title = req.body.title;
            flight.time = req.body.time;
            flight.price = req.body.price;
            flight.date = req.body.date;
        }

        const filteredArray = data.flights.filter(flight => flight.title !== title);
        const newArray = [...filteredArray, flight];

        return res.status(200).json(newArray)

    } catch (error) {
        return res.status(500).json({"message": `${error.message}`})
    }
}

const getFlight = (req, res) => {
    const { title } = req.params;

    try {
        const flight = data.flights.find(flight => flight.title === title);

        if (!flight) {
            return res.status(400).json({ "message": `Flight with ${title} not found` });
        }

        return res.status(200).json(flight);
    } catch (error) {
        return res.status(500).json({"message": `${error.message}`})
    }
}

const deleteFlight = (req, res) => {
    const { title } = req.params
    try{ 

        const flight = data.flights.find(flight => flight.title === title);

        if (!flight) {
            return res.status(400).json({ "message": `Flight with ${title} not found` });
        }

        // filter out the flight from the array
        const filteredArray = data.flights.filter(flight => flight.title !== title);


        data.setFlights([...filteredArray])

        return res.status(204).json(filteredArray)

    } catch (error) {
        return res.status(500).json({"message": `${error.message}`})
    }
}

module.exports = {
    getAllFlights,
    getFlight,
    deleteFlight,
    createFlight,
    updateFlight
}