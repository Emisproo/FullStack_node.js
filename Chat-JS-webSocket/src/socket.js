//conexion al socket- logica del servidor
//detectar un usuario conectado
module.exports =(io)=>{
   
    let users = [];

    io.on('connection', socket =>{
        console.log('New conected user');
        //recibir el mensaje- tomar los datos
        socket.on('send message', (data)=>{
            //console.log(data);
            io.sockets.emit('New message', {
                msg:data,
                userName: socket.userName
            });

        });

        socket.on('new user', (data, callback)=>{
            if(users.indexOf(data) != -1){
                callback(false);
            }else{
                callback(true);
                socket.userName = data;
                users.push(socket.userName);

                io.sockets.emit('new user', users);
            }
        });

        socket.on('disconnect', data =>{
            if(!socket.userName){
                return;
            }else{
                users.splice(users.indexOf(socket.userName), 1);
                io.sockets.emit('new user', users);
            }
        })
    })
}
