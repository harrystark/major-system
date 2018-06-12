rp = require("request-promise")

num2word_url = "https://major-system.info/api.php?o=json&m=n2w&l=en&n="
    
word2num_url = "https://major-system.info/api.php?o=json&m=w2n&l=en&w="

function fetchData(url,callback){
    rp(url).then(JSON.parse).then(function(results){
        output = []
        if(Array.isArray(results["data"])){
        for (let item of results["data"]){
            
            output.push(item[Object.keys(item)[0]])
        }
        }
        else{
            output = results["data"].number
        }
        callback(0,output)
    }).catch(function (err) {
        callback(err,data)
    });
}

function get(input, callback){
    if(typeof(input) == "string"){
        fetchData(word2num_url + input, callback)
    }
    else if(typeof(input) == "number"){
        fetchData(num2word_url + input, callback)
    }
}

// get("hello world",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

module.exports.get = get