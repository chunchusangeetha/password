import React, { useState } from 'react';


export default function Calculator() {
  const [num, setNum] = useState('');

  const numchange = (e) => {
    setNum(e.target.value);
  };



  return (
    <div className="main">
      <h2>Calculator</h2>
      <div>
        <div>
          <input
            type="text"
            value={num}
            placeholder="enter the value"
            onChange={numchange}
          />
        </div>
        <div>
          <div>
          <button
            onClick={() => {
              setNum(num + '1');
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setNum(num + '2');
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setNum(num + '3');
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setNum('');
            }}
          >
            C
          </button>
          </div>
          <br />
          <div>
          <button
            onClick={() => {
              setNum(num + '4');
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setNum(num + '5');
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setNum(num + '6');
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setNum(num + '+');
            }}
          >
            +
          </button>
          </div>
          <br />
          <div>
          <button
            onClick={() => {
              setNum(num + '7');
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setNum(num + '8');
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setNum(num + '9');
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              setNum(num + '-');
            }}
          >
            -
          </button>
          </div>
          <br />
          <div>
          <button
            onClick={() => {
              setNum(num + '*');
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setNum(num + '0');
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setNum(num + '/');
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              // eslint-disable-next-line
              setNum(eval(num));
            }}
          >
            =
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
