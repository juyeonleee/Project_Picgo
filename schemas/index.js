const mongoose = require('mongoose');


module.exports = () =>{

    console.log(process.env.MONGO_ID);
    const { MONGO_ID , MONGO_PW } = process.env;

    console.log('=======================')
    console.log(MONGO_ID,MONGO_PW)
    console.log('=======================')
   
    const dbURL = `mongodb://juyeon:1234@localhost:27017/admin`;

    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(
            dbURL,
            {dbName: 'picup',useNewUriParser : true},
            (error) => {
                if (error) {
                    console.log('몽고디비에러 1', error);
                } else {
                    console.log("몽고디비 연결 성공")
                }
            }
        );
    };
        connect();

        mongoose.connection.on('error',(error)=>{

                console.log('몽고디비에러 2',error);

        });
        mongoose.connection.on('disconnected',()=>{

            console.log('예기치 않게 디비와 연결이 끊어졌습니다. 다시 시도합니다.');

            connect();
        });
        require('./user')
};
