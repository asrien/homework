let join = (req,res)=>{
    res.render('./user/join.html');
}

let join_success = async(req,res)=>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let gender = req.body.gender;

    await User.create({
        userid,userpw,username, gender
    })

    res.render('./user/join_success.html',{
        userid, userpw, username, gender
    });
}

module.exports ={
    join,  
    join_success,
}
