//lado cliente
//jquery para acceder al dom(a los elementos del html)- descargar
$(function(){
    const socket = io();
    var user = '';
    const messageForm = $('#messageForm'); //accede al form 
    const messageBox = $('#message');//accede al mensaje
    const chat = $('#chat');
    const userForm =$('#userForm');
    const userError = $('#errorUser');
    const userName =$('#userName');
    const allUsersNames = $('#allUsersNames');

    //eventos
    messageForm.submit(e=>{ //toma el contenido del mensaje (messageBox) y lo manda via socket al server
        e.preventDefault();
        socket.emit('send message', messageBox.val());
        messageBox.val('');
    });

    //obtenemos respuesta del server que tiene q ver en el chatBox
    socket.on('New message', function(data){
        //console.log(data);
        let color = "lightgrey";

        if(user == data.userName)
        {
            color = "lightgreen";
        }
        chat.append(`<div class="msg-area mb-2 d-flex" style="background-color:${color}"><b>${data.userName}:</b><p class="msg">${data.msg}</p></div>`);
    });

    //acceso al formulario, nuevo usuario
    userForm.submit( e =>{
        e.preventDefault();
        socket.emit('new user', userName.val(), data =>{
            if (data){
                user = userName.val();
                $('#wrap').hide();
                $('#content-wrap').show();
            }else{
                userError.html('<div class="alert alert-danger">User already exists</div>');
            }
            userName.val('');
        });
    });

    //obtenemos array de usuarios conectados
    socket.on('new user', data =>{
        let html = '';
        let color = '';
        let exit = '';

        for (let i = 0; i < data.length; i++){
            if(user == data[i]){
                color = '#027f43';
                exit = '<a class="exitLink" href="/">Exit<a>';
            }else{
                color = '#000';
                exit = '';
            }

            html +=`<p style=color:"${color}">${data[i]} ${exit}</p>`;
        }

        allUsersNames.html(html);

    });

})


