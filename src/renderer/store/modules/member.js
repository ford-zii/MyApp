var mysql = require('mysql');
var config = {
    host:"localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database:"testDB"
};
const state = {
    member: null,
};

const mutations = {
    SET_MEMBER(state, data) {
        state.member = data;
    },

};

const actions = {
    getUser(context) {
        var con = new  mysql.createConnection(config);
        con.connect(function (err) {
            if(err){
                console.log(err.code);
                console.log(err.fatal);
            }
        }),
            $query = 'SELECT * FROM `user` ';
        con.query($query,function (err,rows,fields) {
            if (err) {
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }
            let data = JSON.parse(JSON.stringify(rows));

            console.log("Query succesfully executed", rows,data);
            context.commit("SET_MEMBER",data);
            return data;
        })
    }

};
export default {
    state,
    mutations,
    actions
}
