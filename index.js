let express=require("express");
let app=express();
let port=4000;
let path=require("path");
let data=require("./details.json");
app.listen(port,()=>{
    console.log(`We are currently present at port number : ${port}`);
})

app.set("view engine","ejs");

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let accountdata=data;
    let account=accountdata[username];
    // let accountfollowers=account.followers;
    // let accountfollowing=account.following;
    // let accountpost=account.posts;
    if(account){
    res.render("animal.ejs",{username,account});
    }
    else{
        res.render("error.ejs");
    }
})
app.use(express.static(path.join(__dirname,"public")));