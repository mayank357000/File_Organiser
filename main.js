#!/usr/bin/env node

let treeObj=require("./commands/tree");
let organiseObj=require("./commands/organise");
let helpObj=require("./commands/help");

let inputarr=process.argv.slice(2);//ye input leta from terminal and fill in a array
//first two ele node filename aur baaki ka we give to inputarr when we run this 

// console.log(inputarr);
//main.js node tree "directoryPath"
//main.js node organise "directoryPath"
//main.js node help 

let command=inputarr[0];//yhi pr hoga tree ya organise or help

switch(command)
{
    case "tree":
        treeObj.treeKey(inputarr[1]);
        break;
    case "organise":
        organiseObj.organiseKey(inputarr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default :
    console.log("please put right command 🙏");
}


