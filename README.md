# Intrudation
This is a real-time chat application build with angular(frontend) and node.js(include socket.js, listeners.js and server.js).
# Organization
Running node server.js to start backend on port:3000, and running ng serve in the frontend command to load the app on port:4200.
# Structures
## git ignore
avioding to add node_modules when pushing code.
## Server.js
using the Express.js framework, along with the 'cors' middleware and 'http' module for creating an HTTP.
## Socket.js
1. Import necessary modules:
socketIO: This module is used to create a WebSocket server using Socket.IO.
addListeners: This is likely a custom module that adds event listeners for WebSocket events.
2. Define the configureSocket function that takes an HTTP server instance (server) as a parameter. This function sets up WebSocket functionality.
3. Create a Socket.IO instance (io) and attach it to the provided HTTP server. It also configures CORS (Cross-Origin Resource Sharing) to allow connections only from the specified origin (http://localhost:4200) and to allow specified HTTP methods (GET and POST). This helps in securing your WebSocket server.
## listeners.js
1. addListeners is a module that defines a function used to handle WebSocket events for a specific socket. This function takes two parameters: io, which represents the Socket.IO instance, and socket, which represents the individual WebSocket connection.
2. When a new user connects, it logs a message indicating that a new user has connected to the server.
## frontend
1. There are five components in the frontend: 
### chat-dashboard
checking user login and generate rooms based on user's group.
### group-amin-dashboard
inplement more functions depend on user's pressions after using mongoDB
### login 
login with fake users which are stored in localstorge
### super-admin-dashboard
inplement more functions depend on user's pressions after using mongoDB
### user-dashboard 
inplement more functions depend on user's pressions after using mongoDB
### user object 
defind user object in app.component.ts which is 
    const fakeUsers = [
      {
        _id: INT,
        username: '',
        email: '',
        password: '',
        role: [''],
        permissions: [
          ""
        ],
        groups: [
          { name: 'Room 1'},
        ]
      },]
and faker users information stored in localstoge.
## Interaction
Once user login succeed, they are able to access with chat-dashboard. If users joined in the same room after they clicked the roon on the left of the page, their message with reviced by backend and resend to frontend. 
