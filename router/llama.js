import express from "express";
import {codeConverter,codeDebugger,codeExecutor,codeQualityChecker} from "../controller/llamacontroller.js";

const router = express();

router.route("/convert")
  .post(codeConverter);

router.route("/debug")
  .post(codeDebugger);

router.route("/qualityCheck")
  .post(codeQualityChecker);

router.route("/execute")
  .post(codeExecutor);

export default router;
