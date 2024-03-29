import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
var qs = require('qs');

export default function Compile({ code }) {
  const [isLoading, setLoading] = useState(false);
  const [inp, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [memoryused, setMemoryUsed] = useState("");
  const [timeused, setTimeUsed] = useState("");

  const onSubmitCode = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // https://pseudo-x.herokuapp.com/api/v1/compile/
      var data = qs.stringify({
        'source': code,
        'input': '0' 
      });
      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/v1/compile/',
        headers: { 
          'accept': 'application/json', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        // finalOut[]put=JSON.stringify(response.data.output);

        setOutput(JSON.stringify(response.data['sec']))
        setMemoryUsed(JSON.stringify(response.data['fir'].memory_used))
        setTimeUsed(JSON.stringify(response.data['fir'].time_used))
      setLoading(false)

      })
      .catch(function (error) {
        console.log(error);
      });
      


      // setLoading(false);
      // console.log(res.data.run_status.status);
      // if (
      //   res.data.run_status.stderr !== undefined &&
      //   res.data.run_status.stderr === "" &&
      //   res.data.compile_status === "OK"
      // ) {
      //   setOutput(res.data.run_status.output);
      //   var mem = Math.floor(Math.random() * 100) + 63;
      //   setMemoryUsed(mem);
      //   setTimeUsed(res.data.run_status.time_used);
      // } else if (res.data.compile_status !== "OK")
      //   setOutput(res.data.compile_status);
      // else setOutput(res.data.run_status.stderr);
      // console.log(res.data.run_status.stderr);

      // console.log(res.data.run_status);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="app  p-8 bg-grey-lightest font-sans">
        <div className="row sm:flex">
          <div className="col sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-gray-300">
              <div className="box__title bg-gray-600 px-3 py-2 border-b">
                <h3 className="text-sm text-white font-medium">
                  Enter Custom Input
                </h3>
              </div>
              <textarea
                placeholder="input"
                className="text-gray-700 flex-1 p-2 m-1 bg-transparent"
                name="tt"
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-gray-300">
              <div className="box__title bg-gray-600 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium text-white">
                  Output
                </h3>
              </div>
              <textarea
                className="text-gray-700 flex-1 p-2 m-1 bg-transparent"
                name="tt"
                value={output}
              >
                Here output will come
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <Loader
            className="pl-20"
            type="Rings"
            color="#00BFFF"
            height={80}
            width={80}
          />
        ) : (
          <div className="space-x-32">
            <button
              onClick={onSubmitCode}
              className=" ml-8 bg-green-700 h-10 text-white active:bg-green-300 font-medium uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Compile and Test
            </button>
            {memoryused === "" ? (
              <div></div>
            ) : (
              <div className="space-x-20 inline-block">
                <div className="inline-block text-red-700 font-medium">
                  Memory Used
                  <div className="text-2xl text-black font-normal">
                    {memoryused} KB
                  </div>
                </div>
                <div className="inline-block text-red-700 font-medium">
                  Time Used
                  <div className="text-2xl text-black font-normal">
                    {timeused} ms
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
