import {fileURLToPath} from "url";
import path from "path";
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "..","models", "capybarahermes-2.5-mistral-7b.Q4_K_M.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});


export async function codeConverter(req, res) {
    try {
        const {code,language} = req.body;
        console.log(code,language)
        const question = `You are a code converter which converts the code which is "${code}" to ${language} language`
        const ans = await session.prompt(question);
        if(ans){
            res.status(200).send({data:ans,error:false})
        }
        else{
            res.status(400).send({msg:"No response from the server",error:true})
        }
        console.log(ans)
    } catch (error) {
      res.status(500).send({ msg: error.message, error: true });
    }
  }
  
  export async function codeExecutor(req, res) {
    try {
        const {code} = req.body;
        const question = `You are using the code execution service.

        Please provide the following information:
        
        Code to execute:
        ${code}
        
        Now, execute the code and return the output.`
        const ans = await session.prompt(question);
        if(ans){
            res.status(200).send({data:ans,error:false})
        }
        else{
            res.status(400).send({msg:"No response from the server",error:true})
        }

    } catch (error) {
      res.status(500).send({ msg: error.message, error: true });
    }
  }
  
  export async function codeDebugger(req, res) {
    try {
        const {code} = req.body;

        const question = `You are using the code debugging service.
        Please provide the following information:
        
        Input code (in the programming language):
        ${code}
        
        Now, please debug the code and explain the bugs/errors in the code.`
        const ans = await session.prompt(question);
        if(ans){
            res.status(200).send({data:ans,error:false})
        }
        else{
            res.status(400).send({msg:"No response from the server",error:true})
        }
    } catch (error) {
      res.status(500).send({ msg: error.message, error: true });
    }
  }
  

  
  export async function codeQualityChecker(req, res) {
    try {
        const {code} = req.body;
        const question = `You are using the code efficiency analysis service.
        Please provide the following information:
        
        Input code (in the programming language):
        ${code}
        
        Now, please analyze the code and provide the following details in breif and in percentage:
        
        1. Correctness: 
        2. Readability: 
        3. Maintainibility: 
        4. Effeciency:
        5. Consistency:
        6. Documentation:
        7. Testing:
        8. Error Handling:
        9. Security:
        10. Scalability:
        11. Code Duplication:`
        const ans = await session.prompt(question);
        if(ans){
            res.status(200).send({data:ans,error:false})
        }
        else{
            res.status(400).send({msg:"No response from the server",error:true})
        }
    } catch (error) {
      res.status(500).send({ msg: error.message, error: true });
    }
  }
  