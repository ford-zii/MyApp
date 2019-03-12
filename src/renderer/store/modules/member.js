// var mysql = require('mysql');
// var config = {
//     host:"localhost",
//     user: "root",
//     password: "1234",
//     port: "3306",
//     database:"testDB"
// };
const state = {
    member: null,
};

const mutations = {
    SET_MEMBER(state, data) {
        state.member = data;
    },

};

const actions = {
    // async getUser() {
    //     var con = new  mysql.createConnection(config);
    //     con.connect(function (err) {
    //         if(err){
    //             console.log(err.code);
    //             console.log(err.fatal);
    //         }
    //     });
    //         $query = 'SELECT * FROM `user` ';
    //     let queryData = await con.query($query,function (err,response) {
    //         // if (err) {
    //         //     console.log("An error ocurred performing the query.");
    //         //     console.log(err);
    //         // }
    //         let data = JSON.parse(JSON.stringify(rows));
    //         var arrData = data;
    //         console.log("Query succesfully executed", rows,data);
    //         return arrData;
    //     });
    //
    //     return con;
    // }

};
export default {
    state,
    mutations,
    actions
}
