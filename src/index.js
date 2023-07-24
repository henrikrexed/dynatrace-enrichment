const fs = require("fs");

async function main() {

      await sleep(5000);
      try {

           var json;


         for (let name of ['dt_metadata_e617c525669e072eebe3d0f08212e8f2.json', '/var/lib/dynatrace/enrichment/dt_metadata.json']) {
             if(fs.existsSync(name ) )
             {
             json=JSON.parse(fs.readFileSync(name.startsWith("/var") ?
                                    name : fs.readFileSync(name).toString('utf-8').trim()).toString('utf-8'), (key, value) => {
                                                 console.log(key);
                                                 console.log(value);
                                                 dtmetadata[key]=value;
                                                 process.env[key] = value;
                                               }
                                                );
             }
         }
         console.log(JSON.stringify(process.env))


      } catch(error) {
        console.log(error);
        }

      }

var dtmetadata={}

//const name ='dt_metadata_e617c525669e072eebe3d0f08212e8f2.json'

main();

function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
