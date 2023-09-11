// Define a function addListeners that handles WebSocket events for a specific socket
const addListeners = (io, socket) => {
    // Log that a new user has connected
    console.log('New user connected');

    // Listen for the 'join' event
    socket.on('join', (group) => {
        // Log that the user has joined a group
        console.log(`User joined group: ${group}`);
        
        // Use socket.join(group) to make the socket join a specific room or group
        socket.join(group);
    });

    // Listen for the 'sendMessage' event
    socket.on('sendMessage', (message, group) => {
        // Emit a 'newMessage' event to all sockets in the specified group
        io.to(group).emit('newMessage', message);
    });

    // Listen for the 'leave' event
    socket.on('leave', (group) => {
        // Log that the user has left a group
        console.log(`User left group: ${group}`);
        
        // Use socket.leave(group) to make the socket leave a specific room or group
        socket.leave(group);
    });

    // Listen for the 'disconnect' event, which occurs when the user disconnects from the server
    socket.on('disconnect', () => {
        // Log that the user has disconnected
        console.log('User disconnected');
    });
};

// Export the addListeners function for use in other modules
module.exports = addListeners;

