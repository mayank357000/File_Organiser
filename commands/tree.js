let fs=require("fs");
let path=require("path");

function treeFn(dirPath)
{
  if(dirPath==undefined)//agr naam hi nhi dala 
  {
    treeHelper(process.cwd(),"");
  }
  let doesExist=fs.existsSync(dirPath);
  if(doesExist==false)//worng dir name
  {
    console.log("Kindly enter the correct directory name");
    return;
  }
  else{
    treeHelper(dirPath,"");               
  }
}

function treeHelper(dirPath,indent)
{
  let isFile=fs.lstatSync(dirPath).isFile();
  if(isFile)
  {
    let fileName = path.basename(dirPath);//filename
    console.log(indent + "├──" + fileName);
  }
  else{
   let dirname= path.basename(dirPath);
   console.log(indent + "└──" + dirname);
   let childs=fs.readdirSync(dirPath);
   for(let i=0;i<childs.length;i++)
   {
     let child=path.join(dirPath,childs[i]);
     treeHelper(child,indent+"\t");
   }
  }
}
//onject hai ye jo bhej rhe hai

module.exports={
    treeKey:treeFn
}