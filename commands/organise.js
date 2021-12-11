let fs=require("fs");
let path=require("path");

let types = {
  media: ["mp4", "mkv"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"]
}

function organiseFn(dirPath)
{
//  console.log("Organise function implemented for",dirPath); 
  let despath;
  //1.input-> directory path given
  if(dirPath==undefined)//agr naam hi nhi dala 
  {
    destPath = process.cwd();
    return;
  }

  let doesExist=fs.existsSync(dirPath);
  if(doesExist==false)//worng dir name
  {
    console.log("Kindly enter the correct directory name");
    return;
  }
  else{
    //create-> organised_files->directory
    despath=path.join(dirPath,"organised_files");
    if(fs.existsSync(despath)==false)
    {
      fs.mkdirSync(despath);
    }
    //node main.js organise "D:\File System Organizer\src" (path hamehsa in  " ")    
    organiseHelper(dirPath,despath);                   
  }
}

function organiseHelper(src,des)
{
  //categorise all files in input directory on basis of their types
  let childnames=fs.readdirSync(src);//naam of all files and folders
  console.log(childnames);
  for(let i=0;i<childnames.length;i++)
  {
   let childAddress=path.join(src,childnames[i]);
   let isFile=fs.lstatSync(childAddress).isFile();
   if(isFile)
   {
    // console.log(childnames[i]);
    //4.copy/cut file inside organised_files directoy in its desired category
    let type=getCategory(childAddress);
    // console.log(childnames[i],"belongs to category",type);
    sendFiles(childAddress,des,type);
   }
  }
}

function sendFiles(filePath,desfolder,category)
{
  let categoryPath=path.join(desfolder,category);
  if(fs.existsSync(categoryPath)==false)
  {
    fs.mkdirSync(categoryPath);
  }
  let filename=path.basename(filePath);
  let despath=path.join(categoryPath,filename);
  fs.copyFileSync(filePath,despath);//copies file
  fs.unlinkSync(filePath);
  console.log(filename,"copied to",category);
}

function getCategory(fileadd)
{
  let ext=path.extname(fileadd);
  ext=ext.slice(1);
  for(let type in types)//media,pcis jaisi keys in type
  {
    let typearray=types[type];
    for(let i=0;i<typearray.length;i++)
    {
      if(typearray[i]==ext)
      {
        return type;
      }
    }
  }
  return "others";
}

module.exports={
    organiseKey:organiseFn
}