# Flight Booking API

This is a RESTful API for managing flight bookings. It allows you to perform basic operations such as creating, updating, deleting, and retrieving flight information.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: This project is built with Node.js. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flight-booking-api.git
 
2. Navigate to the project directory:

   cd flight-booking-api

3. Install the dependencies:

   npm install

4. Start the server:

   npm start


The server should now be running at http://localhost:3500 (or the port you specified in index.js).

# Usage
The API provides endpoints to manage flight bookings. You can use tools like Postman or curl to interact with the API.

# API Endpoints
GET /flights: Get a list of all flights.
GET /flights/:title: Get details of a specific flight by title.
POST /flights: Create a new flight.
PUT /flights/:title: Update a flight by title.
DELETE /flights/:title: Delete a flight by title.
Flight Object Structure
A flight object should have the following structure:        

{
  "title": "Flight Title",
  "time": "Flight Time",
  "price": 100.0,
  "date": "Flight Date"
}

# Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes you'd like to contribute.

# License
This project is licensed under the MIT License.



