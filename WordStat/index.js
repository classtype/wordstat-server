//--------------------------------------------------------------------------------------------------

require('app.init')(
    './Modules'
);

/*--------------------------------------------------------------------------------------------------
|
| -> Создаем сервер
|
|-------------------------------------------------------------------------------------------------*/

$.Socket.create({
/* Консоль
 * -> all = все запросы
 * -> body = только тело запросов
**/
    console: 'body',
    
// Адрес сервера
    host: [process.env.IP, process.env.PORT],
    
// Обработчик авторизации
    onAccess: function(userid) {
    // Задаем UserID
        this.setUserID(userid);
        
    // Задаем информацию о юзере
        this.setData({
            userid: userid
        });
    },
    
// Обработчик инициализации
    onInit: function(success) {
        return {
            name: '123'
        };
    }
});

$.on('Init1', function(success) {
    console.log('Init1');
    console.log(this.getUserID());
});

//--------------------------------------------------------------------------------------------------